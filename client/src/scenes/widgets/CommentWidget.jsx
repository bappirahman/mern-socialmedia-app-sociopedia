import { useState } from "react";
import WidgetWrapper from "components/WidgetWrapper";
import { useTheme } from "@emotion/react";
import { InputBase, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import FlexBetween from "components/FlexBetween";
import setPost from "state";
import { useNavigate } from "react-router-dom";

const CommentWidget = ({ postId, comment, setComment, handleComment }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);

  const { palette } = useTheme();

  return (
    <WidgetWrapper>
      <FlexBetween>
        <InputBase
          placeholder="Comment"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          sx={{
            width: "100%",
            backgroundColor: palette.neutral.light,
            borderRadius: "2rem",
            padding: "0.5rem 2rem",
            marginRight: "1rem",
          }}
        />
        <Button
          disabled={!comment}
          onClick={handleComment}
          sx={{
            color: palette.background.alt,
            backgroundColor: palette.primary.main,
            borderRadius: "3rem",
            padding: "0.7rem 0.1rem",
          }}
        >
          POST
        </Button>
      </FlexBetween>
    </WidgetWrapper>
  );
};

export default CommentWidget;
