import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\LiveMatchController::update
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
export const update = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

update.definition = {
    methods: ["post"],
    url: '/admin/live/lineup/{match}/{team}',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::update
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
update.url = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions) => {
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                    team: args[1],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                                team: args.team,
                }

    return update.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace('{team}', parsedArgs.team.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\LiveMatchController::update
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
update.post = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: update.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\LiveMatchController::update
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
    const updateForm = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\LiveMatchController::update
 * @see app/Http/Controllers/Admin/LiveMatchController.php:0
 * @route '/admin/live/lineup/{match}/{team}'
 */
        updateForm.post = (args: { match: string | number, team: string | number } | [match: string | number, team: string | number ], options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, options),
            method: 'post',
        })
    
    update.form = updateForm
const lineup = {
    update: Object.assign(update, update),
}

export default lineup