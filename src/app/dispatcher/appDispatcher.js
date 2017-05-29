/**
 * A singleton that operates as the central hub for app updates
 */

import { Dispatcher } from 'flux';

const appDispatcher = new Dispatcher();

export default appDispatcher;
