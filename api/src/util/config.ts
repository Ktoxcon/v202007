import convict from "convict";

const config = convict({
  env: {
    doc: "The applicaton environment.",
    format: ["production", "staging", "test"],
    default: "test",
    env: "NODE_ENV",
  },

  flags: {
    verifiedPhoneNumbers: {
      doc: "test phone numbers",
      format: "*",
      default: Array(15)
        .fill(null)
        .map((_, i) => `+5020000000${i}`),
      env: "VERIFIED_PHONE_NUMBERS",
    },
  },

  twilio: {
    aid: {
      doc: "Twilio Account SID",
      format: "*",
      default: null,
      env: "TWILIO_ACCOUNT_SID",
      arg: "twilio-account-sid",
    },

    verifyServiceID: {
      doc: "Twilio SMS Service ID",
      format: "*",
      default: null,
      env: "TWILIO_VERIFY_SID",
      arg: "twilio-sms-sid",
    },

    authToken: {
      doc: "Twilio Auth Token",
      format: "*",
      default: null,
      env: "TWILIO_AUTH_TOKEN",
      arg: "twilio-auth-token",
    },
  },
});

export default config;
