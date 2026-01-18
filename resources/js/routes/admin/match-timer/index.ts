import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::start
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
export const start = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

start.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/start',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::start
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
start.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return start.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::start
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
start.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: start.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::start
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
    const startForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: start.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::start
 * @see app/Http/Controllers/Admin/MatchTimerController.php:14
 * @route '/admin/match-timer/{match}/start'
 */
        startForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: start.url(args, options),
            method: 'post',
        })
    
    start.form = startForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::pause
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
export const pause = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pause.url(args, options),
    method: 'post',
})

pause.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/pause',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::pause
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
pause.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return pause.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::pause
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
pause.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: pause.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::pause
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
    const pauseForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: pause.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::pause
 * @see app/Http/Controllers/Admin/MatchTimerController.php:27
 * @route '/admin/match-timer/{match}/pause'
 */
        pauseForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: pause.url(args, options),
            method: 'post',
        })
    
    pause.form = pauseForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::resume
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
export const resume = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resume.url(args, options),
    method: 'post',
})

resume.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/resume',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::resume
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
resume.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return resume.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::resume
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
resume.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: resume.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::resume
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
    const resumeForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: resume.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::resume
 * @see app/Http/Controllers/Admin/MatchTimerController.php:39
 * @route '/admin/match-timer/{match}/resume'
 */
        resumeForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: resume.url(args, options),
            method: 'post',
        })
    
    resume.form = resumeForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::stop
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
export const stop = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stop.url(args, options),
    method: 'post',
})

stop.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/stop',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::stop
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
stop.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return stop.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::stop
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
stop.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: stop.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::stop
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
    const stopForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: stop.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::stop
 * @see app/Http/Controllers/Admin/MatchTimerController.php:51
 * @route '/admin/match-timer/{match}/stop'
 */
        stopForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: stop.url(args, options),
            method: 'post',
        })
    
    stop.form = stopForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
export const additionalTimeFirstHalf = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: additionalTimeFirstHalf.url(args, options),
    method: 'post',
})

additionalTimeFirstHalf.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/additional-time-first-half',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
additionalTimeFirstHalf.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return additionalTimeFirstHalf.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
additionalTimeFirstHalf.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: additionalTimeFirstHalf.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
    const additionalTimeFirstHalfForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: additionalTimeFirstHalf.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeFirstHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:64
 * @route '/admin/match-timer/{match}/additional-time-first-half'
 */
        additionalTimeFirstHalfForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: additionalTimeFirstHalf.url(args, options),
            method: 'post',
        })
    
    additionalTimeFirstHalf.form = additionalTimeFirstHalfForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
export const additionalTimeSecondHalf = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: additionalTimeSecondHalf.url(args, options),
    method: 'post',
})

additionalTimeSecondHalf.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/additional-time-second-half',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
additionalTimeSecondHalf.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return additionalTimeSecondHalf.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
additionalTimeSecondHalf.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: additionalTimeSecondHalf.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
    const additionalTimeSecondHalfForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: additionalTimeSecondHalf.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::additionalTimeSecondHalf
 * @see app/Http/Controllers/Admin/MatchTimerController.php:79
 * @route '/admin/match-timer/{match}/additional-time-second-half'
 */
        additionalTimeSecondHalfForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: additionalTimeSecondHalf.url(args, options),
            method: 'post',
        })
    
    additionalTimeSecondHalf.form = additionalTimeSecondHalfForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
export const enableExtraTime = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableExtraTime.url(args, options),
    method: 'post',
})

enableExtraTime.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/enable-extra-time',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
enableExtraTime.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return enableExtraTime.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
enableExtraTime.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enableExtraTime.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
    const enableExtraTimeForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enableExtraTime.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::enableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:94
 * @route '/admin/match-timer/{match}/enable-extra-time'
 */
        enableExtraTimeForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enableExtraTime.url(args, options),
            method: 'post',
        })
    
    enableExtraTime.form = enableExtraTimeForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
export const disableExtraTime = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disableExtraTime.url(args, options),
    method: 'post',
})

disableExtraTime.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/disable-extra-time',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
disableExtraTime.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return disableExtraTime.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
disableExtraTime.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disableExtraTime.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
    const disableExtraTimeForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: disableExtraTime.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::disableExtraTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:105
 * @route '/admin/match-timer/{match}/disable-extra-time'
 */
        disableExtraTimeForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: disableExtraTime.url(args, options),
            method: 'post',
        })
    
    disableExtraTime.form = disableExtraTimeForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
export const enablePenaltyShootout = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enablePenaltyShootout.url(args, options),
    method: 'post',
})

enablePenaltyShootout.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/enable-penalty-shootout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
enablePenaltyShootout.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return enablePenaltyShootout.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
enablePenaltyShootout.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: enablePenaltyShootout.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
    const enablePenaltyShootoutForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: enablePenaltyShootout.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::enablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:116
 * @route '/admin/match-timer/{match}/enable-penalty-shootout'
 */
        enablePenaltyShootoutForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: enablePenaltyShootout.url(args, options),
            method: 'post',
        })
    
    enablePenaltyShootout.form = enablePenaltyShootoutForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
export const disablePenaltyShootout = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disablePenaltyShootout.url(args, options),
    method: 'post',
})

disablePenaltyShootout.definition = {
    methods: ["post"],
    url: '/admin/match-timer/{match}/disable-penalty-shootout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
disablePenaltyShootout.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return disablePenaltyShootout.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
disablePenaltyShootout.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: disablePenaltyShootout.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
    const disablePenaltyShootoutForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: disablePenaltyShootout.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::disablePenaltyShootout
 * @see app/Http/Controllers/Admin/MatchTimerController.php:127
 * @route '/admin/match-timer/{match}/disable-penalty-shootout'
 */
        disablePenaltyShootoutForm.post = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: disablePenaltyShootout.url(args, options),
            method: 'post',
        })
    
    disablePenaltyShootout.form = disablePenaltyShootoutForm
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::elapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
export const elapsedTime = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: elapsedTime.url(args, options),
    method: 'get',
})

elapsedTime.definition = {
    methods: ["get","head"],
    url: '/admin/match-timer/{match}/elapsed-time',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::elapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
elapsedTime.url = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { match: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    match: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        match: args.match,
                }

    return elapsedTime.definition.url
            .replace('{match}', parsedArgs.match.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\MatchTimerController::elapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
elapsedTime.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: elapsedTime.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\MatchTimerController::elapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
elapsedTime.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: elapsedTime.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\MatchTimerController::elapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
    const elapsedTimeForm = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: elapsedTime.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::elapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
        elapsedTimeForm.get = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: elapsedTime.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\MatchTimerController::elapsedTime
 * @see app/Http/Controllers/Admin/MatchTimerController.php:138
 * @route '/admin/match-timer/{match}/elapsed-time'
 */
        elapsedTimeForm.head = (args: { match: string | number } | [match: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: elapsedTime.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    elapsedTime.form = elapsedTimeForm
const matchTimer = {
    start: Object.assign(start, start),
pause: Object.assign(pause, pause),
resume: Object.assign(resume, resume),
stop: Object.assign(stop, stop),
additionalTimeFirstHalf: Object.assign(additionalTimeFirstHalf, additionalTimeFirstHalf),
additionalTimeSecondHalf: Object.assign(additionalTimeSecondHalf, additionalTimeSecondHalf),
enableExtraTime: Object.assign(enableExtraTime, enableExtraTime),
disableExtraTime: Object.assign(disableExtraTime, disableExtraTime),
enablePenaltyShootout: Object.assign(enablePenaltyShootout, enablePenaltyShootout),
disablePenaltyShootout: Object.assign(disablePenaltyShootout, disablePenaltyShootout),
elapsedTime: Object.assign(elapsedTime, elapsedTime),
}

export default matchTimer