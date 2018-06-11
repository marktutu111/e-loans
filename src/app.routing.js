import { DrawerNavigator, StackNavigator } from "react-navigation";
import { HomeComponent, 
         LoanViewComponent, 
         ProfileComponent,
         LoginComponent,
         EditProfileComponent,
         ResetPasswordComponent,
         WalletComponent,
         LoanComponent,
         SignupComponent } from "./screens";


// AUTHENTICATION ROUTES
const AuthRoute = StackNavigator({
    Login: {
        screen: LoginComponent
    },
    Signup: {
        screen: SignupComponent
    },
    ResetPassword: {
        screen: ResetPasswordComponent
    }
},{
    navigationOptions: {
        header: null
    }
});


// PROFILE ROUTES
const ProfileRoute = StackNavigator({
    Profile: {
        screen: ProfileComponent
    },
    ResetPassword: {
        screen: ResetPasswordComponent
    }
},{
    navigationOptions: {
        header: null
    }
});




// HOME ROUTES
const MainRoute = StackNavigator({
    Home: {
        screen: HomeComponent
    },
    Loan: {
        screen: LoanComponent
    },
    Wallet: {
        screen: WalletComponent
    },
    Profile: {
        screen: ProfileRoute
    }
}, {
    navigationOptions: {
        header: null
    }
});




export { MainRoute, AuthRoute };



