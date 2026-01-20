import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\ManualStatsController::edit
 * @see app/Http/Controllers/Admin/ManualStatsController.php:15
 * @route '/admin/matches/{match}/stats/edit'
 */
export const edit = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/matches/{match}/stats/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ManualStatsController::edit
 * @see app/Http/Controllers/Admin/ManualStatsController.php:15
 * @route '/admin/matches/{match}/stats/edit'
 */
edit.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return edit.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualStatsController::edit
 * @see app/Http/Controllers/Admin/ManualStatsController.php:15
 * @route '/admin/matches/{match}/stats/edit'
 */
edit.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ManualStatsController::edit
 * @see app/Http/Controllers/Admin/ManualStatsController.php:15
 * @route '/admin/matches/{match}/stats/edit'
 */
edit.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ManualStatsController::edit
 * @see app/Http/Controllers/Admin/ManualStatsController.php:15
 * @route '/admin/matches/{match}/stats/edit'
 */
    const editForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualStatsController::edit
 * @see app/Http/Controllers/Admin/ManualStatsController.php:15
 * @route '/admin/matches/{match}/stats/edit'
 */
        editForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ManualStatsController::edit
 * @see app/Http/Controllers/Admin/ManualStatsController.php:15
 * @route '/admin/matches/{match}/stats/edit'
 */
        editForm.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\ManualStatsController::update
 * @see app/Http/Controllers/Admin/ManualStatsController.php:28
 * @route '/admin/matches/{match}/stats'
 */
export const update = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/matches/{match}/stats',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\ManualStatsController::update
 * @see app/Http/Controllers/Admin/ManualStatsController.php:28
 * @route '/admin/matches/{match}/stats'
 */
update.url = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return update.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\ManualStatsController::update
 * @see app/Http/Controllers/Admin/ManualStatsController.php:28
 * @route '/admin/matches/{match}/stats'
 */
update.put = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\ManualStatsController::update
 * @see app/Http/Controllers/Admin/ManualStatsController.php:28
 * @route '/admin/matches/{match}/stats'
 */
    const updateForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualStatsController::update
 * @see app/Http/Controllers/Admin/ManualStatsController.php:28
 * @route '/admin/matches/{match}/stats'
 */
        updateForm.put = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\ManualStatsController::show
 * @see app/Http/Controllers/Admin/ManualStatsController.php:78
 * @route '/admin/matches/{match}/stats'
 */
export const show = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/matches/{match}/stats',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\ManualStatsController::show
 * @see app/Http/Controllers/Admin/ManualStatsController.php:78
 * @route '/admin/matches/{match}/stats'
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
* @see \App\Http\Controllers\Admin\ManualStatsController::show
 * @see app/Http/Controllers/Admin/ManualStatsController.php:78
 * @route '/admin/matches/{match}/stats'
 */
show.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\ManualStatsController::show
 * @see app/Http/Controllers/Admin/ManualStatsController.php:78
 * @route '/admin/matches/{match}/stats'
 */
show.head = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\ManualStatsController::show
 * @see app/Http/Controllers/Admin/ManualStatsController.php:78
 * @route '/admin/matches/{match}/stats'
 */
    const showForm = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\ManualStatsController::show
 * @see app/Http/Controllers/Admin/ManualStatsController.php:78
 * @route '/admin/matches/{match}/stats'
 */
        showForm.get = (args: { match: number | { id: number } } | [match: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\ManualStatsController::show
 * @see app/Http/Controllers/Admin/ManualStatsController.php:78
 * @route '/admin/matches/{match}/stats'
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
const stats = {
    edit: Object.assign(edit, edit),
update: Object.assign(update, update),
show: Object.assign(show, show),
}

export default stats