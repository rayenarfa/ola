<<<<<<< HEAD
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
=======
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";
>>>>>>> f3f2b62125fdfe862fc4760e78dd340bca2c0129

const SignIn = () => {
    // Create logGoogleUser function
    const logGoogleUser = async () => { 
<<<<<<< HEAD
        
        //const response = await signInWithGooglePopup();
        
        //destruct of response and pass in as userAuth 
        const { user } = await signInWithGooglePopup();
        
        //callig method using response user object
       const userDocRef= await createUserDocumentFromAuth(user)
=======
        const response = await signInWithGooglePopup();
        console.log(response);  
>>>>>>> f3f2b62125fdfe862fc4760e78dd340bca2c0129
    };

    return (
        <div>
            <h1>I'm the sign-in page</h1>
            <button onClick={logGoogleUser}>
<<<<<<< HEAD
                Sign in with Google Popup
=======
                Sign in with Google
>>>>>>> f3f2b62125fdfe862fc4760e78dd340bca2c0129
            </button>
        </div>
    );
};

export default SignIn;
<<<<<<< HEAD


=======
>>>>>>> f3f2b62125fdfe862fc4760e78dd340bca2c0129
