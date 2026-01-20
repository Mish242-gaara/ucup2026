import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\MatchController::status
 * @see app/Http/Controllers/Frontend/MatchController.php:0
 * @route '/api/match/{match}/status'
 */
export const status = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})

status.definition = {
    methods: ["get","head"],
    url: '/api/match/{match}/status',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\MatchController::status
 * @see app/Http/Controllers/Frontend/MatchController.php:0
 * @route '/api/match/{match}/status'
 */
status.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    const parsedArgs = {
                        match: args.match,
                }

    return status.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\MatchController::status
 * @see app/Http/Controllers/Frontend/MatchController.php:0
 * @route '/api/match/{match}/status'
 */
status.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: status.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\MatchController::status
 * @see app/Http/Controllers/Frontend/MatchController.php:0
 * @route '/api/match/{match}/status'
 */
status.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: status.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\MatchController::status
 * @see app/Http/Controllers/Frontend/MatchController.php:0
 * @route '/api/match/{match}/status'
 */
    const statusForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: status.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\MatchController::status
 * @see app/Http/Controllers/Frontend/MatchController.php:0
 * @route '/api/match/{match}/status'
 */
        statusForm.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\MatchController::status
 * @see app/Http/Controllers/Frontend/MatchController.php:0
 * @route '/api/match/{match}/status'
 */
        statusForm.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: status.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    status.form = statusForm
const match = {
    status: Object.assign(status, status),
}

export default match