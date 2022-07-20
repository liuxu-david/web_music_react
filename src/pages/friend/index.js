import React, { memo } from "react";
import { FriendWrapper } from "./style";

const LXFriend = memo(() => {
  return (
    <FriendWrapper>
      <div className="friend-pic w980">
        <div className="pic"></div>
      </div>
    </FriendWrapper>
  );
});

export default LXFriend;
