import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Api\RealTimeMatchController::realtime
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
export const realtime = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: realtime.url(args, options),
    method: 'get',
})

realtime.definition = {
    methods: ["get","head"],
    url: '/api/matches/{match}/realtime',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\RealTimeMatchController::realtime
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
realtime.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return realtime.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\RealTimeMatchController::realtime
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
realtime.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: realtime.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\RealTimeMatchController::realtime
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
realtime.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: realtime.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\RealTimeMatchController::realtime
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
    const realtimeForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: realtime.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\RealTimeMatchController::realtime
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
        realtimeForm.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: realtime.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\RealTimeMatchController::realtime
 * @see app/Http/Controllers/Api/RealTimeMatchController.php:23
 * @route '/api/matches/{match}/realtime'
 */
        realtimeForm.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: realtime.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    realtime.form = realtimeForm
/**
* @see \App\Http\Controllers\Api\SseMatchController::stream
 * @see app/Http/Controllers/Api/SseMatchController.php:16
 * @route '/api/matches/{match}/stream'
 */
export const stream = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stream.url(args, options),
    method: 'get',
})

stream.definition = {
    methods: ["get","head"],
    url: '/api/matches/{match}/stream',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Api\SseMatchController::stream
 * @see app/Http/Controllers/Api/SseMatchController.php:16
 * @route '/api/matches/{match}/stream'
 */
stream.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
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

    return stream.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Api\SseMatchController::stream
 * @see app/Http/Controllers/Api/SseMatchController.php:16
 * @route '/api/matches/{match}/stream'
 */
stream.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: stream.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Api\SseMatchController::stream
 * @see app/Http/Controllers/Api/SseMatchController.php:16
 * @route '/api/matches/{match}/stream'
 */
stream.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: stream.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Api\SseMatchController::stream
 * @see app/Http/Controllers/Api/SseMatchController.php:16
 * @route '/api/matches/{match}/stream'
 */
    const streamForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: stream.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Api\SseMatchController::stream
 * @see app/Http/Controllers/Api/SseMatchController.php:16
 * @route '/api/matches/{match}/stream'
 */
        streamForm.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stream.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Api\SseMatchController::stream
 * @see app/Http/Controllers/Api/SseMatchController.php:16
 * @route '/api/matches/{match}/stream'
 */
        streamForm.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: stream.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    stream.form = streamForm
const matches = {
    realtime: Object.assign(realtime, realtime),
stream: Object.assign(stream, stream),
}

export default matches