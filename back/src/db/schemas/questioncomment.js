import { Schema, model, Mongoose } from 'mongoose';

const QuestioncommentSchema = new Schema(
  {
    board_id: {
      type: Schema.Types.ObjectId,
      ref: 'Question',
    },
    user_id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const QuestioncommentModel = model('Questioncomment', QuestioncommentSchema);

export { QuestioncommentModel };
