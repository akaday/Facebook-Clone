import Image from 'next/image';
import { signIn } from 'next-auth/client';

// tailwind css not applying to this component
function Login() {
    return (
        <div style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column'
        }}>
            <Image
                src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
                width={400}
                height={400}
                objectFit="contain"
            />
            <button 
                style={{
                    backgroundColor: '#1a76f1',
                    padding: 20,
                    color: 'white',
                    cursor: 'pointer',
                    borderRadius: '50px'    
                }}
                onClick={signIn}
            >
                Login with Facebook
            </button>
        </div>
    )
}

export default Login