import { Schema, model } from 'mongoose';

const GoogleAppSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      required: true,
    },
    installs: {
      type: Number,
      required: true,
    },
    free: {
      type: Boolean,
      required: true,
    },
    released: {
      type: Number,
      required: true,
    },
    lastUpdated: {
      type: Number,
      required: true,
    },
    adsupported: {
      type: Boolean,
      required: true,
    },
    inAppPurchases: {
      type: Boolean,
      required: true,
    },
    editorsChoice: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const GoogleAppModel = model('GoogleApp', GoogleAppSchema);

export { GoogleAppModel };
