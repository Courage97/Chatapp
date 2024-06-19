import React, { useContext, useState } from 'react'; 
import { IoSearch } from "react-icons/io5";
import { collection, query, where, getDocs, doc, setDoc  } from "firebase/firestore";
import { db } from '../firebase';
import { AuthContext } from '../Context/AuthContext';

const Search = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const handleSearch = async () => {
    try {
      const q = query(collection(db, "users"), where("username", "==", username));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data());
      });
      // Reset error state if successful
      setErr(false);
    } catch (error) {
      console.error("Error searching for user:", error);
      setErr(true);
    }
  };

  const handleKey = (e) => {
    if (e.code === "Enter") {
      handleSearch();
    }
  };

  const handleSelect = async () => {
    try {
      // Check whether chats exist, if not create
      const combineId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;
      const chatRef = doc(db, "chats", combineId);
      const chatSnapshot = await getDocs(chatRef);
      if (!chatSnapshot.exists()) {
        // If chat doesn't exist, create it
        await setDoc(chatRef, {
          // Add chat properties here
        });
      }
    } catch (error) {
      console.error("Error selecting user:", error);
    }
  };

  return (
    <div className="search">
      <div className="search-form">
        <input 
          type="text" 
          placeholder='Find a user' 
          style={{ width: "100%" }} 
          onKeyDown={handleKey}  
          onChange={(e) => setUsername(e.target.value)}
        />
        <IoSearch 
          size={30} 
          style={{ color: "white", marginBottom: "30px", marginRight: "20px" }}
          onClick={handleSearch} // Add onClick event for search icon
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className="userchat" onClick={handleSelect}>
          <img src={user.photoURL} alt="" />
          <div className="userchatinfo">
            <span>{user.username}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;
