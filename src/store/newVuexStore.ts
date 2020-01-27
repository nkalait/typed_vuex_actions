import * as Vuex from 'vuex';
import { ALLOWED_ACTIONS } from '@/enums';

/**
 * Create a new class extending Vuex.Store and 
 * replacing dispatch with the one we have modified below
 */
export class NewVuexStore extends Vuex.Store<any>  {
    dispatch: Dispatch;
    constructor(options: Vuex.StoreOptions<any>) {
        super(options);
        this.dispatch = Vuex.Store.prototype.dispatch;
    }
}

/**
 * extending Vuex's dispatch function so that it will only allow
 * - The actions defined in the enum ALLOWED_ACTIONS
 * - A payload that is ONLY either of 
 *      > Person[]
 *      > Car[]
 * that is, we create a new dispatch that only allows actions that will result 
 * in the storage of either array of Persons or array of Cars only, nothing else.
 */
interface Dispatch {
    /** If actions is ALLOWED_ACTIONS.STORE_CARS then only allow payload of type Entities<Car> */
    (   action: ALLOWED_ACTIONS.STORE_CARS , 
        payload: Entities<Car>, 
        options?: Vuex.DispatchOptions ): Promise<any>;


    /** If actions is ALLOWED_ACTIONS.STORE_PEOPLE then only allow payload of type Entities<Person> */
    (   action: ALLOWED_ACTIONS.STORE_PEOPLE , 
        payload: Entities<Person>, 
        options?: Vuex.DispatchOptions ): Promise<any>;

    /** this comes from the original definition of Dispatch */
    <P extends Vuex.Payload>(payloadWithType: P, options?: Vuex.DispatchOptions): Promise<any>;
}