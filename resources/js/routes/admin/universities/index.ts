import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\UniversityController::index
 * @see app/Http/Controllers/Admin/UniversityController.php:16
 * @route '/admin/universities'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/universities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\UniversityController::index
 * @see app/Http/Controllers/Admin/UniversityController.php:16
 * @route '/admin/universities'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\UniversityController::index
 * @see app/Http/Controllers/Admin/UniversityController.php:16
 * @route '/admin/universities'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\UniversityController::index
 * @see app/Http/Controllers/Admin/UniversityController.php:16
 * @route '/admin/universities'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\UniversityController::index
 * @see app/Http/Controllers/Admin/UniversityController.php:16
 * @route '/admin/universities'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\UniversityController::index
 * @see app/Http/Controllers/Admin/UniversityController.php:16
 * @route '/admin/universities'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\UniversityController::index
 * @see app/Http/Controllers/Admin/UniversityController.php:16
 * @route '/admin/universities'
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
* @see \App\Http\Controllers\Admin\UniversityController::create
 * @see app/Http/Controllers/Admin/UniversityController.php:25
 * @route '/admin/universities/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/universities/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\UniversityController::create
 * @see app/Http/Controllers/Admin/UniversityController.php:25
 * @route '/admin/universities/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\UniversityController::create
 * @see app/Http/Controllers/Admin/UniversityController.php:25
 * @route '/admin/universities/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\UniversityController::create
 * @see app/Http/Controllers/Admin/UniversityController.php:25
 * @route '/admin/universities/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\UniversityController::create
 * @see app/Http/Controllers/Admin/UniversityController.php:25
 * @route '/admin/universities/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\UniversityController::create
 * @see app/Http/Controllers/Admin/UniversityController.php:25
 * @route '/admin/universities/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\UniversityController::create
 * @see app/Http/Controllers/Admin/UniversityController.php:25
 * @route '/admin/universities/create'
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
* @see \App\Http\Controllers\Admin\UniversityController::store
 * @see app/Http/Controllers/Admin/UniversityController.php:34
 * @route '/admin/universities'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/universities',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\UniversityController::store
 * @see app/Http/Controllers/Admin/UniversityController.php:34
 * @route '/admin/universities'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\UniversityController::store
 * @see app/Http/Controllers/Admin/UniversityController.php:34
 * @route '/admin/universities'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\UniversityController::store
 * @see app/Http/Controllers/Admin/UniversityController.php:34
 * @route '/admin/universities'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\UniversityController::store
 * @see app/Http/Controllers/Admin/UniversityController.php:34
 * @route '/admin/universities'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\UniversityController::edit
 * @see app/Http/Controllers/Admin/UniversityController.php:60
 * @route '/admin/universities/{university}/edit'
 */
export const edit = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/universities/{university}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\UniversityController::edit
 * @see app/Http/Controllers/Admin/UniversityController.php:60
 * @route '/admin/universities/{university}/edit'
 */
edit.url = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { university: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { university: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    university: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        university: typeof args.university === 'object'
                ? args.university.id
                : args.university,
                }

    return edit.definition.url
            .replace('{university}', parsedArgs.university.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\UniversityController::edit
 * @see app/Http/Controllers/Admin/UniversityController.php:60
 * @route '/admin/universities/{university}/edit'
 */
edit.get = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\UniversityController::edit
 * @see app/Http/Controllers/Admin/UniversityController.php:60
 * @route '/admin/universities/{university}/edit'
 */
edit.head = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\UniversityController::edit
 * @see app/Http/Controllers/Admin/UniversityController.php:60
 * @route '/admin/universities/{university}/edit'
 */
    const editForm = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\UniversityController::edit
 * @see app/Http/Controllers/Admin/UniversityController.php:60
 * @route '/admin/universities/{university}/edit'
 */
        editForm.get = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\UniversityController::edit
 * @see app/Http/Controllers/Admin/UniversityController.php:60
 * @route '/admin/universities/{university}/edit'
 */
        editForm.head = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\UniversityController::update
 * @see app/Http/Controllers/Admin/UniversityController.php:65
 * @route '/admin/universities/{university}'
 */
export const update = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/admin/universities/{university}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\UniversityController::update
 * @see app/Http/Controllers/Admin/UniversityController.php:65
 * @route '/admin/universities/{university}'
 */
update.url = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { university: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { university: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    university: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        university: typeof args.university === 'object'
                ? args.university.id
                : args.university,
                }

    return update.definition.url
            .replace('{university}', parsedArgs.university.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\UniversityController::update
 * @see app/Http/Controllers/Admin/UniversityController.php:65
 * @route '/admin/universities/{university}'
 */
update.put = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\UniversityController::update
 * @see app/Http/Controllers/Admin/UniversityController.php:65
 * @route '/admin/universities/{university}'
 */
    const updateForm = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\UniversityController::update
 * @see app/Http/Controllers/Admin/UniversityController.php:65
 * @route '/admin/universities/{university}'
 */
        updateForm.put = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\UniversityController::destroy
 * @see app/Http/Controllers/Admin/UniversityController.php:89
 * @route '/admin/universities/{university}'
 */
export const destroy = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/universities/{university}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\UniversityController::destroy
 * @see app/Http/Controllers/Admin/UniversityController.php:89
 * @route '/admin/universities/{university}'
 */
destroy.url = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { university: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { university: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    university: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        university: typeof args.university === 'object'
                ? args.university.id
                : args.university,
                }

    return destroy.definition.url
            .replace('{university}', parsedArgs.university.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\UniversityController::destroy
 * @see app/Http/Controllers/Admin/UniversityController.php:89
 * @route '/admin/universities/{university}'
 */
destroy.delete = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\UniversityController::destroy
 * @see app/Http/Controllers/Admin/UniversityController.php:89
 * @route '/admin/universities/{university}'
 */
    const destroyForm = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\UniversityController::destroy
 * @see app/Http/Controllers/Admin/UniversityController.php:89
 * @route '/admin/universities/{university}'
 */
        destroyForm.delete = (args: { university: number | { id: number } } | [university: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
const universities = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
}

export default universities