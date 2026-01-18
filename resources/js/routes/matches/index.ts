import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
import showBac614 from './show'
/**
* @see \App\Http\Controllers\Frontend\MatchController::index
 * @see app/Http/Controllers/Frontend/MatchController.php:12
 * @route '/matches'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/matches',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\MatchController::index
 * @see app/Http/Controllers/Frontend/MatchController.php:12
 * @route '/matches'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\MatchController::index
 * @see app/Http/Controllers/Frontend/MatchController.php:12
 * @route '/matches'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\MatchController::index
 * @see app/Http/Controllers/Frontend/MatchController.php:12
 * @route '/matches'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\MatchController::index
 * @see app/Http/Controllers/Frontend/MatchController.php:12
 * @route '/matches'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\MatchController::index
 * @see app/Http/Controllers/Frontend/MatchController.php:12
 * @route '/matches'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\MatchController::index
 * @see app/Http/Controllers/Frontend/MatchController.php:12
 * @route '/matches'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Frontend\MatchController::live
 * @see app/Http/Controllers/Frontend/MatchController.php:204
 * @route '/matches/live'
 */
export const live = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: live.url(options),
    method: 'get',
})

live.definition = {
    methods: ["get","head"],
    url: '/matches/live',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\MatchController::live
 * @see app/Http/Controllers/Frontend/MatchController.php:204
 * @route '/matches/live'
 */
live.url = (options?: RouteQueryOptions) => {
    return live.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\MatchController::live
 * @see app/Http/Controllers/Frontend/MatchController.php:204
 * @route '/matches/live'
 */
live.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: live.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\MatchController::live
 * @see app/Http/Controllers/Frontend/MatchController.php:204
 * @route '/matches/live'
 */
live.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: live.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\MatchController::live
 * @see app/Http/Controllers/Frontend/MatchController.php:204
 * @route '/matches/live'
 */
    const liveForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: live.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\MatchController::live
 * @see app/Http/Controllers/Frontend/MatchController.php:204
 * @route '/matches/live'
 */
        liveForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: live.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\MatchController::live
 * @see app/Http/Controllers/Frontend/MatchController.php:204
 * @route '/matches/live'
 */
        liveForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: live.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    live.form = liveForm
/**
* @see \App\Http\Controllers\Frontend\MatchController::show
 * @see app/Http/Controllers/Frontend/MatchController.php:52
 * @route '/matches/{match}'
 */
export const show = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/matches/{match}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\MatchController::show
 * @see app/Http/Controllers/Frontend/MatchController.php:52
 * @route '/matches/{match}'
 */
show.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { match: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: typeof args.match === 'object'
                ? args.match.id
                : args.match,
                }

    return show.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\MatchController::show
 * @see app/Http/Controllers/Frontend/MatchController.php:52
 * @route '/matches/{match}'
 */
show.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\MatchController::show
 * @see app/Http/Controllers/Frontend/MatchController.php:52
 * @route '/matches/{match}'
 */
show.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\MatchController::show
 * @see app/Http/Controllers/Frontend/MatchController.php:52
 * @route '/matches/{match}'
 */
    const showForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\MatchController::show
 * @see app/Http/Controllers/Frontend/MatchController.php:52
 * @route '/matches/{match}'
 */
        showForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\MatchController::show
 * @see app/Http/Controllers/Frontend/MatchController.php:52
 * @route '/matches/{match}'
 */
        showForm.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
const matches = {
    index: Object.assign(index, index),
live: Object.assign(live, live),
show: Object.assign(show, showBac614),
}

export default matches