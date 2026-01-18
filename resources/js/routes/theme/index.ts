import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\ThemeController::show
 * @see app/Http/Controllers/ThemeController.php:41
 * @route '/theme'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/theme',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\ThemeController::show
 * @see app/Http/Controllers/ThemeController.php:41
 * @route '/theme'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ThemeController::show
 * @see app/Http/Controllers/ThemeController.php:41
 * @route '/theme'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\ThemeController::show
 * @see app/Http/Controllers/ThemeController.php:41
 * @route '/theme'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\ThemeController::show
 * @see app/Http/Controllers/ThemeController.php:41
 * @route '/theme'
 */
    const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\ThemeController::show
 * @see app/Http/Controllers/ThemeController.php:41
 * @route '/theme'
 */
        showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\ThemeController::show
 * @see app/Http/Controllers/ThemeController.php:41
 * @route '/theme'
 */
        showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\ThemeController::store
 * @see app/Http/Controllers/ThemeController.php:13
 * @route '/theme'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/theme',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\ThemeController::store
 * @see app/Http/Controllers/ThemeController.php:13
 * @route '/theme'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\ThemeController::store
 * @see app/Http/Controllers/ThemeController.php:13
 * @route '/theme'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\ThemeController::store
 * @see app/Http/Controllers/ThemeController.php:13
 * @route '/theme'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\ThemeController::store
 * @see app/Http/Controllers/ThemeController.php:13
 * @route '/theme'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const theme = {
    show: Object.assign(show, show),
store: Object.assign(store, store),
}

export default theme