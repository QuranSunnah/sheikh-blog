import { commonCodes } from "./common.js";

export const userAllAddressGetData = {
  200: {
    message: "Success",
    data: {
      addresses: [
        {
          id: "62267e7b-7a30-42e5-ab85-dfd69a9e00c8",
          full_name: "John Snow",
          phone_number: "01833730682",
          district_id: 11,
          district_name: "Bagerhat",
          area_id: 269,
          area_name: "Bagerhat Sadar",
          street_address: "Bagerhat Sadar",
          full_address: "Bagerhat Sadar",
          is_default: true,
          notes: "note",
          label: 3,
        },
      ],
    },
    errors: [],
  },
  ...commonCodes,
};

export const userSingleAddressGetData = {
  200: {
    data: {
      address: {
        id: "62267e7b-7a30-42e5-ab85-dfd69a9e00c8",
        full_name: "John Snow",
        phone_number: "01833730682",
        district_id: 11,
        district_name: "Bagerhat",
        area_id: 269,
        area_name: "Bagerhat Sadar",
        street_address: "Bagerhat Sadar",
        full_address: "Bagerhat Sadar",
        is_default: true,
        notes: "note",
        label: 3,
      },
    },
    message: "Success",
    errors: [],
  },
  ...commonCodes,
};

export const userAddressPostData = {
  200: {
    data: {
      address: {
        id: "62267e7b-7a30-42e5-ab85-dfd69a9e00c8",
        full_name: "John Snow",
        phone_number: "01833730682",
        district_id: 11,
        district_name: "Bagerhat",
        area_id: 269,
        area_name: "Bagerhat Sadar",
        street_address: "Bagerhat Sadar",
        full_address: "Bagerhat Sadar",
        is_default: true,
        notes: "note",
        label: 3,
      },
    },
    message: "Success",
    errors: [],
  },
  422: {
    message: "Unprocessable Content",
    data: [],
    errors: [
      {
        name: "full_name",
        message: "The full name field is required.",
      },
    ],
  },

  ...commonCodes,
};

export const userAddressDeleteData = {
  204: {
    message: "Success",
    data: {
      addresses: [
        {
          id: "62267e7b-7a30-42e5-ab85-dfd69a9e00c8",
          full_name: "John Snow",
          phone_number: "01833730682",
          district_id: 11,
          district_name: "Bagerhat",
          area_id: 269,
          area_name: "Bagerhat Sadar",
          street_address: "Bagerhat Sadar",
          full_address: "Bagerhat Sadar",
          is_default: true,
          notes: "note",
          label: 3,
        },
      ],
    },
    errors: [],
  },
  ...commonCodes,
};

export const userAllDistrictGetData = {
  200: {
    message: "Success",
    errors: [],
    data: {
      districts: [
        {
          value: "value",
          label: "label",
        },
      ],
    },
  },
  ...commonCodes,
};

export const userSingleDistrictGetData = {
  200: {
    message: "Success",
    errors: [],
    data: {
      district: {
        value: 1,
        label: "Barishal",
        upazillas: [
          {
            value: 1,
            label: "Barguna",
          },
        ],
      },
    },
  },
  ...commonCodes,
};

export const userAllDivisionGetData = {
  200: {
    message: "Success",
    errors: [],
    data: {
      divisions: [
        {
          value: "value",
          label: "label",
        },
      ],
    },
  },
  ...commonCodes,
};

export const userSingleDivisionGetData = {
  200: {
    message: "Success",
    errors: [],
    data: {
      division: {
        value: 1,
        label: "Barishal",
        districts: [
          {
            value: 1,
            label: "Barguna",
          },
        ],
      },
    },
  },

  ...commonCodes,
};
