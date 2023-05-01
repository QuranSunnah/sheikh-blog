import AuthBtn from ".";

export default {
  title: "Buttons/AuthBtn",
  component: AuthBtn,
  tags: ["autodocs"],
};

export const Button = {
  args: {
    btnText: "Sign Up",
    btnIcon: "/assets/icons/gmail.svg",
    path: "/signin/email",
    isDisabled: false,
    onClick: () => {},
  },
};
