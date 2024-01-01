export const personalInfoIds = [
  {
    id: "name",
    label: "Name",
    placeholder: "e.g. Stephen King",
    type: "text",
  },
  {
    id: "email",
    label: "Email Address",
    placeholder: "e.g. stephenking@lorem.com",
    type: "email",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    placeholder: "e.g. +1 234 567 890",
    type: "tel",
  },
];

export const prices = {
  plans: {
    arcade: 9,
    advanced: 12,
    pro: 15,
  },
  addOns: {
    onlineService: 1,
    largerStorage: 2,
    customizableProfile: 2,
  },
};

export const addOnIds = [
  {
    type: "onlineService",
    label: {
      title: "Online Service",
      desc: "Access to multiplayer games",
      price: 1,
    },
  },
  {
    type: "largerStorage",
    label: {
      title: "Larger storage",
      desc: "Extra 1TB of cloud save",
      price: 2,
    },
  },
  {
    type: "customizableProfile",
    label: {
      title: "Customizable Profile",
      desc: "Custom theme on your portfolio",
      price: 2,
    },
  },
];
