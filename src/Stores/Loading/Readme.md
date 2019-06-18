This Module use to control all loading action in app
// Loading action is use to control Loading when a action occur like submit Form
// Loading list use to show loading when you call api to get a list items
// Loading item use when have to must show two or more loading in a time, at this point you must specify loading by specify name in object loadingItem key, so why it must be an object and not a boolean

. This module also black list in redux-pesist config . Because some reson when you show loading and disabled a button but some error occur or you refresh page . If it is cache in localStorage this button will not click anymore cause bug. So it will not be cache in localStorage
