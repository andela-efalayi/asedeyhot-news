/**
 * A singleton that operates as the central hub for app updates
 */

import { Dispatcher } from 'flux';

const AppDispatcher = new Dispatcher();

export default AppDispatcher;
