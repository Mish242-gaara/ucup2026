import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MatchEventController::create
 * @see app/Http/Controllers/Admin/MatchEventController.php:24
 * @route '/admin/match-events/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/match-events/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchEventController::create
 * @see app/Http/Controllers/Admin/MatchEventController.php:24
 * @route '/admin/match-events/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchEventController::create
 * @see app/Http/Controllers/Admin/MatchEventController.php:24
 * @route '/admin/match-events/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchEventController::create
 * @see app/Http/Controllers/Admin/MatchEventController.php:24
 * @route '/admin/match-events/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchEventController::create
 * @see app/Http/Controllers/Admin/MatchEventController.php:24
 * @route '/admin/match-events/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchEventController::create
 * @see app/Http/Controllers/Admin/MatchEventController.php:24
 * @route '/admin/match-events/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchEventController::create
 * @see app/Http/Controllers/Admin/MatchEventController.php:24
 * @route '/admin/match-events/create'
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
* @see \App\Http\Controllers\Admin\MatchEventController::store
 * @see app/Http/Controllers/Admin/MatchEventController.php:32
 * @route '/admin/match-events'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/match-events',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchEventController::store
 * @see app/Http/Controllers/Admin/MatchEventController.php:32
 * @route '/admin/match-events'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchEventController::store
 * @see app/Http/Controllers/Admin/MatchEventController.php:32
 * @route '/admin/match-events'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchEventController::store
 * @see app/Http/Controllers/Admin/MatchEventController.php:32
 * @route '/admin/match-events'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchEventController::store
 * @see app/Http/Controllers/Admin/MatchEventController.php:32
 * @route '/admin/match-events'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\MatchEventController::show
 * @see app/Http/Controllers/Admin/MatchEventController.php:52
 * @route '/admin/match-events/{match_event}'
 */
export const show = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/match-events/{match_event}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchEventController::show
 * @see app/Http/Controllers/Admin/MatchEventController.php:52
 * @route '/admin/match-events/{match_event}'
 */
show.url = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match_event: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match_event: args[0],
                }
    }

    const parsedArgs = {
                        match_event: args.match_event,
                }

    return show.definition.url
            .replace('{match_event}', parsedArgs.match_event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchEventController::show
 * @see app/Http/Controllers/Admin/MatchEventController.php:52
 * @route '/admin/match-events/{match_event}'
 */
show.get = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchEventController::show
 * @see app/Http/Controllers/Admin/MatchEventController.php:52
 * @route '/admin/match-events/{match_event}'
 */
show.head = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchEventController::show
 * @see app/Http/Controllers/Admin/MatchEventController.php:52
 * @route '/admin/match-events/{match_event}'
 */
    const showForm = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchEventController::show
 * @see app/Http/Controllers/Admin/MatchEventController.php:52
 * @route '/admin/match-events/{match_event}'
 */
        showForm.get = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchEventController::show
 * @see app/Http/Controllers/Admin/MatchEventController.php:52
 * @route '/admin/match-events/{match_event}'
 */
        showForm.head = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\MatchEventController::edit
 * @see app/Http/Controllers/Admin/MatchEventController.php:60
 * @route '/admin/match-events/{match_event}/edit'
 */
export const edit = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/match-events/{match_event}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchEventController::edit
 * @see app/Http/Controllers/Admin/MatchEventController.php:60
 * @route '/admin/match-events/{match_event}/edit'
 */
edit.url = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match_event: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match_event: args[0],
                }
    }

    const parsedArgs = {
                        match_event: args.match_event,
                }

    return edit.definition.url
            .replace('{match_event}', parsedArgs.match_event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchEventController::edit
 * @see app/Http/Controllers/Admin/MatchEventController.php:60
 * @route '/admin/match-events/{match_event}/edit'
 */
edit.get = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchEventController::edit
 * @see app/Http/Controllers/Admin/MatchEventController.php:60
 * @route '/admin/match-events/{match_event}/edit'
 */
edit.head = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchEventController::edit
 * @see app/Http/Controllers/Admin/MatchEventController.php:60
 * @route '/admin/match-events/{match_event}/edit'
 */
    const editForm = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchEventController::edit
 * @see app/Http/Controllers/Admin/MatchEventController.php:60
 * @route '/admin/match-events/{match_event}/edit'
 */
        editForm.get = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchEventController::edit
 * @see app/Http/Controllers/Admin/MatchEventController.php:60
 * @route '/admin/match-events/{match_event}/edit'
 */
        editForm.head = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\MatchEventController::update
 * @see app/Http/Controllers/Admin/MatchEventController.php:68
 * @route '/admin/match-events/{match_event}'
 */
export const update = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/match-events/{match_event}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\MatchEventController::update
 * @see app/Http/Controllers/Admin/MatchEventController.php:68
 * @route '/admin/match-events/{match_event}'
 */
update.url = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match_event: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match_event: args[0],
                }
    }

    const parsedArgs = {
                        match_event: args.match_event,
                }

    return update.definition.url
            .replace('{match_event}', parsedArgs.match_event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchEventController::update
 * @see app/Http/Controllers/Admin/MatchEventController.php:68
 * @route '/admin/match-events/{match_event}'
 */
update.put = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\MatchEventController::update
 * @see app/Http/Controllers/Admin/MatchEventController.php:68
 * @route '/admin/match-events/{match_event}'
 */
update.patch = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\MatchEventController::update
 * @see app/Http/Controllers/Admin/MatchEventController.php:68
 * @route '/admin/match-events/{match_event}'
 */
    const updateForm = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchEventController::update
 * @see app/Http/Controllers/Admin/MatchEventController.php:68
 * @route '/admin/match-events/{match_event}'
 */
        updateForm.put = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchEventController::update
 * @see app/Http/Controllers/Admin/MatchEventController.php:68
 * @route '/admin/match-events/{match_event}'
 */
        updateForm.patch = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\MatchEventController::destroy
 * @see app/Http/Controllers/Admin/MatchEventController.php:88
 * @route '/admin/match-events/{match_event}'
 */
export const destroy = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/match-events/{match_event}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\MatchEventController::destroy
 * @see app/Http/Controllers/Admin/MatchEventController.php:88
 * @route '/admin/match-events/{match_event}'
 */
destroy.url = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match_event: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match_event: args[0],
                }
    }

    const parsedArgs = {
                        match_event: args.match_event,
                }

    return destroy.definition.url
            .replace('{match_event}', parsedArgs.match_event.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchEventController::destroy
 * @see app/Http/Controllers/Admin/MatchEventController.php:88
 * @route '/admin/match-events/{match_event}'
 */
destroy.delete = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\MatchEventController::destroy
 * @see app/Http/Controllers/Admin/MatchEventController.php:88
 * @route '/admin/match-events/{match_event}'
 */
    const destroyForm = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchEventController::destroy
 * @see app/Http/Controllers/Admin/MatchEventController.php:88
 * @route '/admin/match-events/{match_event}'
 */
        destroyForm.delete = (args: { match_event: string | number } | [match_event: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const matchEvents = {
    create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default matchEvents