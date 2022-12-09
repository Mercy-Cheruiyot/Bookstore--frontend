// import React from 'react';
// import Card from "./Card";
// import { useState, useEffect } from "react";


// function Profile() {
//     const [user, setUser] = useState(null);
      
//         useEffect(() => {
//           // auto-login
//           fetch("/me").then((r) => {
//             if (r.ok) {
//               r.json().then((user) => setUser(user));
//             }
//           });
//         }, []);
      
//         if (!user) return <Login onLogin={setUser} />;
//     return(
//         <div>
            
//             {user.map((user) => (
//                 <Card key={user.id} user={user} />
//         ))}
          
//             </div>

//     );
// }
// export default Profile;