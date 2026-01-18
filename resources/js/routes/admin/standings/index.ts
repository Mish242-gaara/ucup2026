import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\StandingAdminController::recalculate
 * @see app/Http/Controllers/Admin/StandingAdminController.php:21
 * @route '/admin/standings/recalculate'
 */
export const recalculate = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recalculate.url(options),
    method: 'post',
})

recalculate.definition = {
    methods: ["post"],
    url: '/admin/standings/recalculate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\StandingAdminController::recalculate
 * @see app/Http/Controllers/Admin/StandingAdminController.php:21
 * @route '/admin/standings/recalculate'
 */
recalculate.url = (options?: RouteQueryOptions) => {
    return recalculate.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\StandingAdminController::recalculate
 * @see app/Http/Controllers/Admin/StandingAdminController.php:21
 * @route '/admin/standings/recalculate'
 */
recalculate.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: recalculate.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\StandingAdminController::recalculate
 * @see app/Http/Controllers/Admin/StandingAdminController.php:21
 * @route '/admin/standings/recalculate'
 */
    const recalculateForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: recalculate.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\StandingAdminController::recalculate
 * @see app/Http/Controllers/Admin/StandingAdminController.php:21
 * @route '/admin/standings/recalculate'
 */
        recalculateForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: recalculate.url(options),
            method: 'post',
        })
    
    recalculate.form = recalculateForm
const standings = {
    recalculate: Object.assign(recalculate, recalculate),
}

export default standings