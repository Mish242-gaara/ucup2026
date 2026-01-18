import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::create
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:22
 * @route '/inscription-joueur'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/inscription-joueur',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::create
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:22
 * @route '/inscription-joueur'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::create
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:22
 * @route '/inscription-joueur'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::create
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:22
 * @route '/inscription-joueur'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::create
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:22
 * @route '/inscription-joueur'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::create
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:22
 * @route '/inscription-joueur'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::create
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:22
 * @route '/inscription-joueur'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::store
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:34
 * @route '/inscription-joueur'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/inscription-joueur',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::store
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:34
 * @route '/inscription-joueur'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::store
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:34
 * @route '/inscription-joueur'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::store
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:34
 * @route '/inscription-joueur'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Frontend\PlayerRegistrationController::store
 * @see app/Http/Controllers/Frontend/PlayerRegistrationController.php:34
 * @route '/inscription-joueur'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const register = {
    create: Object.assign(create, create),
store: Object.assign(store, store),
}

export default register