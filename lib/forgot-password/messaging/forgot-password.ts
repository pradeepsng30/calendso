import buildMessageTemplate from "../../emails/buildMessageTemplate";

export const forgotPasswordSubjectTemplate = "Forgot your password? - PickMyMentor";

export const forgotPasswordMessageTemplate = `Hey there,

Use the link below to reset your password.
{{link}}

p.s. It expires in 6 hours.

- PickMyMentor`;

export const buildForgotPasswordMessage = (vars) => {
  return buildMessageTemplate({
    subjectTemplate: forgotPasswordSubjectTemplate,
    messageTemplate: forgotPasswordMessageTemplate,
    vars,
  });
};
