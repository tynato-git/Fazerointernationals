import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const fields = [
  "Name",
  "Company",
  "Email",
  "Phone",
  "Country",
  "City",
  "Website",
  "Industry",
  "Business Description",
  "Current Challenge",
  "Target Market",
  "Services Required",
];

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm("xbglenka");

  if (state.succeeded) {
    return (
      <div className="border border-primary bg-secondary p-8">
        <CheckCircle2 className="size-8 text-primary" />

        <h2 className="mt-5 font-display text-4xl">
          Thank you.
        </h2>

        <p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">
          Your consultation request has been received successfully.
          We will review your details and get back to you shortly.
        </p>

        <Button
          type="button"
          variant="outline"
          className="mt-6 rounded-none"
          onClick={reset}
        >
          Submit another request
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-5 sm:grid-cols-2"
    >
      {fields.map((f, i) => (
        <label
          key={f}
          className={i >= 8 ? "sm:col-span-2" : ""}
        >
          <span className="mb-2 block text-[10px] font-semibold uppercase text-muted-foreground">
            {f}
          </span>

          {i >= 8 ? (
            <Textarea
              name={f}
              required={
                f === "Current Challenge" ||
                f === "Services Required"
              }
              className="min-h-24 rounded-none bg-background"
            />
          ) : (
            <Input
              name={f}
              type={
                f === "Email"
                  ? "email"
                  : f === "Website"
                    ? "url"
                    : f === "Phone"
                      ? "tel"
                      : "text"
              }
              required={["Name", "Email", "Company"].includes(f)}
              className="h-12 rounded-none bg-background"
            />
          )}

          {f === "Email" && (
            <ValidationError
              prefix="Email"
              field="Email"
              errors={state.errors}
              className="mt-2 text-xs text-red-600"
            />
          )}
        </label>
      ))}

      <label className="sm:col-span-2">
        <span className="mb-2 block text-[10px] font-semibold uppercase text-muted-foreground">
          Message
        </span>

        <Textarea
          name="Message"
          className="min-h-32 rounded-none bg-background"
        />
      </label>

      <Button
        type="submit"
        disabled={state.submitting}
        className="h-14 rounded-none sm:col-span-2"
      >
        {state.submitting
          ? "Sending..."
          : "Request a Consultation"}

        {!state.submitting && <ArrowRight />}
      </Button>

      {state.errors && (
        <p className="text-xs leading-6 text-red-600 sm:col-span-2">
          There was a problem submitting your request.
          Please check the form and try again.
        </p>
      )}

      <p className="text-xs leading-6 text-muted-foreground sm:col-span-2">
        Your information will be securely submitted to Fazero
        International for consultation follow-up.
      </p>
    </form>
  );
}