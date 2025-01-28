"use client";

import { useActionState } from "react"; // Импортируем useActionState
import { submitFeedback } from "../actions/submitFeedback";

const initialState = {
  message: "",
};

export default function FeedbackForm() {
  const [state, formAction, pending] = useActionState(
    submitFeedback,
    initialState
  );

  return (
    <section className="max-w-5xl mx-auto w-full p-6">
      <form
        action={formAction}
        className="flex flex-col max-w-md mx-auto w-full bg-white space-y-4"
      >
        <div className="flex flex-col">
          <label htmlFor="email" className="font-medium">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="comment" className="font-medium">
            Комментарий:
          </label>
          <textarea
            id="comment"
            name="comment"
            required
            className="border border-gray-300 rounded p-2"
          />
        </div>
        <button
          disabled={pending}
          type="submit"
          className={`mt-2 px-4 py-2 text-white rounded ${
            pending
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-green-500 hover:bg-green-600"
          }`}
        >
          {pending ? "Отправка..." : "Отправить"}
        </button>
        {state.message && (
          <p
            className={`p-2 rounded ${
              state.message.includes("Спасибо")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {state.message}
          </p>
        )}
      </form>
    </section>
  );
}
