import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    // Create logGoogleUser function
    const logGoogleUser = async () => { 
        // Destructure the user from the response of signInWithGooglePopup
        const { user } = await signInWithGooglePopup();
        
        // Call the method to create a user document using the user object
        const userDocRef = await createUserDocumentFromAuth(user);
        console.log(userDocRef);
    };

    return (
        <div>
            <h1>I'm the sign-in page</h1>
            <button onClick={logGoogleUser}>
                Sign in with Google
            </button>
        </div>
    );
};

export default SignIn;
