import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\StandingController::index
 * @see app/Http/Controllers/Frontend/StandingController.php:28
 * @route '/standings'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/standings',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\StandingController::index
 * @see app/Http/Controllers/Frontend/StandingController.php:28
 * @route '/standings'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\StandingController::index
 * @see app/Http/Controllers/Frontend/StandingController.php:28
 * @route '/standings'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\StandingController::index
 * @see app/Http/Controllers/Frontend/StandingController.php:28
 * @route '/standings'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\StandingController::index
 * @see app/Http/Controllers/Frontend/StandingController.php:28
 * @route '/standings'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\StandingController::index
 * @see app/Http/Controllers/Frontend/StandingController.php:28
 * @route '/standings'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\StandingController::index
 * @see app/Http/Controllers/Frontend/StandingController.php:28
 * @route '/standings'
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
* @see \App\Http\Controllers\Frontend\StandingController::group
 * @see app/Http/Controllers/Frontend/StandingController.php:44
 * @route '/standings/group/{group}'
 */
export const group = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: group.url(args, options),
    method: 'get',
})

group.definition = {
    methods: ["get","head"],
    url: '/standings/group/{group}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\StandingController::group
 * @see app/Http/Controllers/Frontend/StandingController.php:44
 * @route '/standings/group/{group}'
 */
group.url = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { group: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    group: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        group: args.group,
                }

    return group.definition.url
            .replace('{group}', parsedArgs.group.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\StandingController::group
 * @see app/Http/Controllers/Frontend/StandingController.php:44
 * @route '/standings/group/{group}'
 */
group.get = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: group.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\StandingController::group
 * @see app/Http/Controllers/Frontend/StandingController.php:44
 * @route '/standings/group/{group}'
 */
group.head = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: group.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\StandingController::group
 * @see app/Http/Controllers/Frontend/StandingController.php:44
 * @route '/standings/group/{group}'
 */
    const groupForm = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: group.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\StandingController::group
 * @see app/Http/Controllers/Frontend/StandingController.php:44
 * @route '/standings/group/{group}'
 */
        groupForm.get = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: group.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\StandingController::group
 * @see app/Http/Controllers/Frontend/StandingController.php:44
 * @route '/standings/group/{group}'
 */
        groupForm.head = (args: { group: string | number } | [group: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: group.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    group.form = groupForm
const standings = {
    index: Object.assign(index, index),
group: Object.assign(group, group),
}

export default standings