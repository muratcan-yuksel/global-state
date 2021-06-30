- in moviecontext.js:

creates the MovieProvider const
then adds state into that MovieProvider function with useState hook
imports usestate and !!!!=> createContext hooks
outside of the MovieProvider component, creates a context=>
export const MovieContext = createContext();
=====> So what this does is: Whenever we want to use the information provided in the MovieProvider, we import the MovieContext in wherever we want to. To do that, we need to wrap the MovieContext in the return statement of MovieProvider like so:
return(
    <MovieContext.provider>

    </MovieContext.provider>
)

we have 2 choices here. Either we can wrap all the individual components that we wish to use the MovieContext inside here, inside the return statement like so:
return(
    <MovieContext.provider>
    <Nav />
    <App />
    <AddMovie /> etc
    </MovieContext.provider>
)
or we can give it a props of children that will make the context available to all the children. Like so:
DON'T forget to add the props in the Provider like so => export const MovieProvider=(props)=>{

}
return(
    <MovieContext.provider>
    {props.children}

    </MovieContext.provider>
)
For this props.children to work, he goes to App.js and imports the MovieProvider like so:
import {MovieProvider} from "./MovieContext"
see: provider is imported from the context
