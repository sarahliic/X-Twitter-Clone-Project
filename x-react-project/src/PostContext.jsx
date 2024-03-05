import { createContext, useState } from "react";

const PostContext = createContext();

export function ListProvider({ children }) {
  const [listProperties, setListProperties] = useState([]);

  return (
    <PostContext.Provider value={[listProperties, setListProperties]}>
      {children}
    </PostContext.Provider>
  );
}

export default PostContext;
