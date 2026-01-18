import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\PlayerController::index
 * @see app/Http/Controllers/Admin/PlayerController.php:16
 * @route '/admin/players'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin/players',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::index
 * @see app/Http/Controllers/Admin/PlayerController.php:16
 * @route '/admin/players'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::index
 * @see app/Http/Controllers/Admin/PlayerController.php:16
 * @route '/admin/players'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PlayerController::index
 * @see app/Http/Controllers/Admin/PlayerController.php:16
 * @route '/admin/players'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PlayerController::index
 * @see app/Http/Controllers/Admin/PlayerController.php:16
 * @route '/admin/players'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PlayerController::index
 * @see app/Http/Controllers/Admin/PlayerController.php:16
 * @route '/admin/players'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PlayerController::index
 * @see app/Http/Controllers/Admin/PlayerController.php:16
 * @route '/admin/players'
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
* @see \App\Http\Controllers\Admin\PlayerController::create
 * @see app/Http/Controllers/Admin/PlayerController.php:49
 * @route '/admin/players/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin/players/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::create
 * @see app/Http/Controllers/Admin/PlayerController.php:49
 * @route '/admin/players/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::create
 * @see app/Http/Controllers/Admin/PlayerController.php:49
 * @route '/admin/players/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PlayerController::create
 * @see app/Http/Controllers/Admin/PlayerController.php:49
 * @route '/admin/players/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PlayerController::create
 * @see app/Http/Controllers/Admin/PlayerController.php:49
 * @route '/admin/players/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PlayerController::create
 * @see app/Http/Controllers/Admin/PlayerController.php:49
 * @route '/admin/players/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PlayerController::create
 * @see app/Http/Controllers/Admin/PlayerController.php:49
 * @route '/admin/players/create'
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
* @see \App\Http\Controllers\Admin\PlayerController::store
 * @see app/Http/Controllers/Admin/PlayerController.php:59
 * @route '/admin/players'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin/players',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::store
 * @see app/Http/Controllers/Admin/PlayerController.php:59
 * @route '/admin/players'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::store
 * @see app/Http/Controllers/Admin/PlayerController.php:59
 * @route '/admin/players'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PlayerController::store
 * @see app/Http/Controllers/Admin/PlayerController.php:59
 * @route '/admin/players'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PlayerController::store
 * @see app/Http/Controllers/Admin/PlayerController.php:59
 * @route '/admin/players'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\PlayerController::show
 * @see app/Http/Controllers/Admin/PlayerController.php:91
 * @route '/admin/players/{player}'
 */
export const show = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin/players/{player}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::show
 * @see app/Http/Controllers/Admin/PlayerController.php:91
 * @route '/admin/players/{player}'
 */
show.url = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { player: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    player: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        player: typeof args.player === 'object'
                ? args.player.id
                : args.player,
                }

    return show.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::show
 * @see app/Http/Controllers/Admin/PlayerController.php:91
 * @route '/admin/players/{player}'
 */
show.get = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PlayerController::show
 * @see app/Http/Controllers/Admin/PlayerController.php:91
 * @route '/admin/players/{player}'
 */
show.head = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PlayerController::show
 * @see app/Http/Controllers/Admin/PlayerController.php:91
 * @route '/admin/players/{player}'
 */
    const showForm = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PlayerController::show
 * @see app/Http/Controllers/Admin/PlayerController.php:91
 * @route '/admin/players/{player}'
 */
        showForm.get = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PlayerController::show
 * @see app/Http/Controllers/Admin/PlayerController.php:91
 * @route '/admin/players/{player}'
 */
        showForm.head = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PlayerController::edit
 * @see app/Http/Controllers/Admin/PlayerController.php:99
 * @route '/admin/players/{player}/edit'
 */
export const edit = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin/players/{player}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::edit
 * @see app/Http/Controllers/Admin/PlayerController.php:99
 * @route '/admin/players/{player}/edit'
 */
edit.url = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { player: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    player: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        player: typeof args.player === 'object'
                ? args.player.id
                : args.player,
                }

    return edit.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::edit
 * @see app/Http/Controllers/Admin/PlayerController.php:99
 * @route '/admin/players/{player}/edit'
 */
edit.get = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PlayerController::edit
 * @see app/Http/Controllers/Admin/PlayerController.php:99
 * @route '/admin/players/{player}/edit'
 */
edit.head = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PlayerController::edit
 * @see app/Http/Controllers/Admin/PlayerController.php:99
 * @route '/admin/players/{player}/edit'
 */
    const editForm = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PlayerController::edit
 * @see app/Http/Controllers/Admin/PlayerController.php:99
 * @route '/admin/players/{player}/edit'
 */
        editForm.get = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PlayerController::edit
 * @see app/Http/Controllers/Admin/PlayerController.php:99
 * @route '/admin/players/{player}/edit'
 */
        editForm.head = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PlayerController::update
 * @see app/Http/Controllers/Admin/PlayerController.php:108
 * @route '/admin/players/{player}'
 */
export const update = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin/players/{player}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::update
 * @see app/Http/Controllers/Admin/PlayerController.php:108
 * @route '/admin/players/{player}'
 */
update.url = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { player: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    player: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        player: typeof args.player === 'object'
                ? args.player.id
                : args.player,
                }

    return update.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::update
 * @see app/Http/Controllers/Admin/PlayerController.php:108
 * @route '/admin/players/{player}'
 */
update.put = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Admin\PlayerController::update
 * @see app/Http/Controllers/Admin/PlayerController.php:108
 * @route '/admin/players/{player}'
 */
update.patch = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Admin\PlayerController::update
 * @see app/Http/Controllers/Admin/PlayerController.php:108
 * @route '/admin/players/{player}'
 */
    const updateForm = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PlayerController::update
 * @see app/Http/Controllers/Admin/PlayerController.php:108
 * @route '/admin/players/{player}'
 */
        updateForm.put = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Admin\PlayerController::update
 * @see app/Http/Controllers/Admin/PlayerController.php:108
 * @route '/admin/players/{player}'
 */
        updateForm.patch = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\PlayerController::destroy
 * @see app/Http/Controllers/Admin/PlayerController.php:145
 * @route '/admin/players/{player}'
 */
export const destroy = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin/players/{player}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::destroy
 * @see app/Http/Controllers/Admin/PlayerController.php:145
 * @route '/admin/players/{player}'
 */
destroy.url = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { player: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { player: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    player: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        player: typeof args.player === 'object'
                ? args.player.id
                : args.player,
                }

    return destroy.definition.url
            .replace('{player}', parsedArgs.player.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::destroy
 * @see app/Http/Controllers/Admin/PlayerController.php:145
 * @route '/admin/players/{player}'
 */
destroy.delete = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\PlayerController::destroy
 * @see app/Http/Controllers/Admin/PlayerController.php:145
 * @route '/admin/players/{player}'
 */
    const destroyForm = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PlayerController::destroy
 * @see app/Http/Controllers/Admin/PlayerController.php:145
 * @route '/admin/players/{player}'
 */
        destroyForm.delete = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Admin\PlayerController::bulkImport
 * @see app/Http/Controllers/Admin/PlayerController.php:159
 * @route '/admin/players/bulk-import'
 */
export const bulkImport = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkImport.url(options),
    method: 'post',
})

bulkImport.definition = {
    methods: ["post"],
    url: '/admin/players/bulk-import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PlayerController::bulkImport
 * @see app/Http/Controllers/Admin/PlayerController.php:159
 * @route '/admin/players/bulk-import'
 */
bulkImport.url = (options?: RouteQueryOptions) => {
    return bulkImport.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PlayerController::bulkImport
 * @see app/Http/Controllers/Admin/PlayerController.php:159
 * @route '/admin/players/bulk-import'
 */
bulkImport.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: bulkImport.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PlayerController::bulkImport
 * @see app/Http/Controllers/Admin/PlayerController.php:159
 * @route '/admin/players/bulk-import'
 */
    const bulkImportForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkImport.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PlayerController::bulkImport
 * @see app/Http/Controllers/Admin/PlayerController.php:159
 * @route '/admin/players/bulk-import'
 */
        bulkImportForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkImport.url(options),
            method: 'post',
        })
    
    bulkImport.form = bulkImportForm
const players = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
bulkImport: Object.assign(bulkImport, bulkImport),
}

export default players