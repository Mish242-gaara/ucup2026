import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
import lineup from './lineup'
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/live',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::index
 * @see app/Http/Controllers/Admin/LiveMatchController.php:23
 * @route '/admin/live'
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
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
export const show = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/live/match/{match}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
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
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
show.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
show.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
    const showForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
 */
        showForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::show
 * @see app/Http/Controllers/Admin/LiveMatchController.php:59
 * @route '/admin/live/match/{match}'
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
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_stats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
export const update_stats = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_stats.url(args, options),
    method: 'post',
})

update_stats.definition = {
    methods: ["post"],
    url: '/admin/live/match/{match}/update-stats',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_stats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
update_stats.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update_stats.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_stats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
update_stats.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_stats.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_stats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
    const update_statsForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_stats.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_stats
 * @see app/Http/Controllers/Admin/LiveMatchController.php:195
 * @route '/admin/live/match/{match}/update-stats'
 */
        update_statsForm.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_stats.url(args, options),
            method: 'post',
        })
    
    update_stats.form = update_statsForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_status
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
export const update_status = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_status.url(args, options),
    method: 'post',
})

update_status.definition = {
    methods: ["post"],
    url: '/admin/live/status/{match}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_status
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
update_status.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update_status.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_status
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
update_status.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update_status.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_status
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
    const update_statusForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update_status.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::update_status
 * @see app/Http/Controllers/Admin/LiveMatchController.php:142
 * @route '/admin/live/status/{match}'
 */
        update_statusForm.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update_status.url(args, options),
            method: 'post',
        })
    
    update_status.form = update_statusForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::add_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
export const add_event = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add_event.url(args, options),
    method: 'post',
})

add_event.definition = {
    methods: ["post"],
    url: '/admin/live/event/{match}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::add_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
add_event.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return add_event.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::add_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
add_event.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: add_event.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::add_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
    const add_eventForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: add_event.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::add_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:253
 * @route '/admin/live/event/{match}'
 */
        add_eventForm.post = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: add_event.url(args, options),
            method: 'post',
        })
    
    add_event.form = add_eventForm
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::delete_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
export const delete_event = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: delete_event.url(args, options),
    method: 'delete',
})

delete_event.definition = {
    methods: ["delete"],
    url: '/admin/live/event/{matchEvent}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::delete_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
delete_event.url = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { matchEvent: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { matchEvent: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    matchEvent: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        matchEvent: typeof args.matchEvent === 'object'
                ? args.matchEvent.id
                : args.matchEvent,
                }

    return delete_event.definition.url
            .replace('{matchEvent}', parsedArgs.matchEvent.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::delete_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
delete_event.delete = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: delete_event.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::delete_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
    const delete_eventForm = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: delete_event.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::delete_event
 * @see app/Http/Controllers/Admin/LiveMatchController.php:360
 * @route '/admin/live/event/{matchEvent}'
 */
        delete_eventForm.delete = (args: { matchEvent: number | { id: number } } | [matchEvent: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: delete_event.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    delete_event.form = delete_eventForm
const live = {
    index: Object.assign(index, index),
show: Object.assign(show, show),
update_stats: Object.assign(update_stats, update_stats),
update_status: Object.assign(update_status, update_status),
add_event: Object.assign(add_event, add_event),
delete_event: Object.assign(delete_event, delete_event),
lineup: Object.assign(lineup, lineup),
}

export default live