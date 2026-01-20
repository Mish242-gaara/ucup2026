import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\MatchController::sofascore
 * @see app/Http/Controllers/Frontend/MatchController.php:132
 * @route '/matches/{match}/sofascore'
 */
export const sofascore = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sofascore.url(args, options),
    method: 'get',
})

sofascore.definition = {
    methods: ["get","head"],
    url: '/matches/{match}/sofascore',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\MatchController::sofascore
 * @see app/Http/Controllers/Frontend/MatchController.php:132
 * @route '/matches/{match}/sofascore'
 */
sofascore.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    const parsedArgs = {
                        match: typeof args.match === 'object'
                ? args.match.id
                : args.match,
                }

    return sofascore.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\MatchController::sofascore
 * @see app/Http/Controllers/Frontend/MatchController.php:132
 * @route '/matches/{match}/sofascore'
 */
sofascore.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: sofascore.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\MatchController::sofascore
 * @see app/Http/Controllers/Frontend/MatchController.php:132
 * @route '/matches/{match}/sofascore'
 */
sofascore.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: sofascore.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\MatchController::sofascore
 * @see app/Http/Controllers/Frontend/MatchController.php:132
 * @route '/matches/{match}/sofascore'
 */
    const sofascoreForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: sofascore.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\MatchController::sofascore
 * @see app/Http/Controllers/Frontend/MatchController.php:132
 * @route '/matches/{match}/sofascore'
 */
        sofascoreForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sofascore.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\MatchController::sofascore
 * @see app/Http/Controllers/Frontend/MatchController.php:132
 * @route '/matches/{match}/sofascore'
 */
        sofascoreForm.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: sofascore.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    sofascore.form = sofascoreForm
const show = {
    sofascore: Object.assign(sofascore, sofascore),
}

export default show