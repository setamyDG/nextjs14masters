/// <reference types="stripe-event-types" />

import { type NextRequest } from "next/server";
import type Stripe from "stripe";
import { initStripe } from "@/utils/stripe";

export async function POST(request: NextRequest): Promise<Response> {
	if (!process.env.STRIPE_WEBHOOK_SECRET) {
		throw new Error("Missing Stripe publishable key");
	}

	const stripe = initStripe();
	const signature = request.headers.get("stripe-signature");

	if (!signature) {
		return new Response("Invalid signature", { status: 400 });
	}

	const event = stripe.webhooks.constructEvent(
		await request.text(),
		signature,
		process.env.STRIPE_WEBHOOK_SECRET,
	) as Stripe.DiscriminatedEvent;

	switch (event.type) {
		case "checkout.session.completed": {
			console.dir(event, { depth: 999 });
			event.data.object.metadata?.cartId;
		}
		case "checkout.session.async_payment_failed": {
			console.log("Payment failed", event.data.object.metadata?.cartId);
		}
		case "checkout.session.async_payment_succeeded": {
			console.log("Payment succeeded", event.data.object.metadata?.cartId);
		}
		case "checkout.session.expired": {
			console.log("Session expired", event.data.object.metadata?.cartId);
		}
		default: {
			console.log(`Unhandled event type: ${event.type}`);
		}
	}

	return new Response(null, { status: 204 });
}
