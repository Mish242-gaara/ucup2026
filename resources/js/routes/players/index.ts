import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\PlayerController::index
 * @see app/Http/Controllers/Frontend/PlayerController.php:51
 * @route '/players'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/players',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\PlayerController::index
 * @see app/Http/Controllers/Frontend/PlayerController.php:51
 * @route '/players'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\PlayerController::index
 * @see app/Http/Controllers/Frontend/PlayerController.php:51
 * @route '/players'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\PlayerController::index
 * @see app/Http/Controllers/Frontend/PlayerController.php:51
 * @route '/players'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\PlayerController::index
 * @see app/Http/Controllers/Frontend/PlayerController.php:51
 * @route '/players'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\PlayerController::index
 * @see app/Http/Controllers/Frontend/PlayerController.php:51
 * @route '/players'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\PlayerController::index
 * @see app/Http/Controllers/Frontend/PlayerController.php:51
 * @route '/players'
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
* @see \App\Http\Controllers\Frontend\PlayerController::leaderboard
 * @see app/Http/Controllers/Frontend/PlayerController.php:17
 * @route '/players/leaderboard'
 */
export const leaderboard = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: leaderboard.url(options),
    method: 'get',
})

leaderboard.definition = {
    methods: ["get","head"],
    url: '/players/leaderboard',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\PlayerController::leaderboard
 * @see app/Http/Controllers/Frontend/PlayerController.php:17
 * @route '/players/leaderboard'
 */
leaderboard.url = (options?: RouteQueryOptions) => {
    return leaderboard.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\PlayerController::leaderboard
 * @see app/Http/Controllers/Frontend/PlayerController.php:17
 * @route '/players/leaderboard'
 */
leaderboard.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: leaderboard.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\PlayerController::leaderboard
 * @see app/Http/Controllers/Frontend/PlayerController.php:17
 * @route '/players/leaderboard'
 */
leaderboard.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: leaderboard.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\PlayerController::leaderboard
 * @see app/Http/Controllers/Frontend/PlayerController.php:17
 * @route '/players/leaderboard'
 */
    const leaderboardForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: leaderboard.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\PlayerController::leaderboard
 * @see app/Http/Controllers/Frontend/PlayerController.php:17
 * @route '/players/leaderboard'
 */
        leaderboardForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: leaderboard.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\PlayerController::leaderboard
 * @see app/Http/Controllers/Frontend/PlayerController.php:17
 * @route '/players/leaderboard'
 */
        leaderboardForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: leaderboard.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    leaderboard.form = leaderboardForm
/**
* @see \App\Http\Controllers\Frontend\PlayerController::show
 * @see app/Http/Controllers/Frontend/PlayerController.php:92
 * @route '/players/{player}'
 */
export const show = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/players/{player}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\PlayerController::show
 * @see app/Http/Controllers/Frontend/PlayerController.php:92
 * @route '/players/{player}'
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
* @see \App\Http\Controllers\Frontend\PlayerController::show
 * @see app/Http/Controllers/Frontend/PlayerController.php:92
 * @route '/players/{player}'
 */
show.get = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\PlayerController::show
 * @see app/Http/Controllers/Frontend/PlayerController.php:92
 * @route '/players/{player}'
 */
show.head = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\PlayerController::show
 * @see app/Http/Controllers/Frontend/PlayerController.php:92
 * @route '/players/{player}'
 */
    const showForm = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\PlayerController::show
 * @see app/Http/Controllers/Frontend/PlayerController.php:92
 * @route '/players/{player}'
 */
        showForm.get = (args: { player: number | { id: number } } | [player: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\PlayerController::show
 * @see app/Http/Controllers/Frontend/PlayerController.php:92
 * @route '/players/{player}'
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
const players = {
    index: Object.assign(index, index),
leaderboard: Object.assign(leaderboard, leaderboard),
show: Object.assign(show, show),
}

export default players