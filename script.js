
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-01-24 05:00:00", "b": 503.0}, {"a": "2025-01-24 05:05:00", "b": 510.8}, {"a": "2025-01-24 05:10:00", "b": 517.3333333333334}, {"a": "2025-01-24 05:15:00", "b": 503.8}, {"a": "2025-01-24 05:20:00", "b": 513.75}, {"a": "2025-01-24 05:25:00", "b": 519.0}, {"a": "2025-01-24 05:30:00", "b": 527.4}, {"a": "2025-01-24 05:35:00", "b": 540.4}, {"a": "2025-01-24 05:40:00", "b": 532.6}, {"a": "2025-01-24 05:45:00", "b": 508.0}, {"a": "2025-01-24 05:50:00", "b": 516.0}, {"a": "2025-01-24 05:55:00", "b": 524.6}, {"a": "2025-01-24 06:00:00", "b": 517.25}, {"a": "2025-01-24 06:05:00", "b": 516.25}, {"a": "2025-01-24 06:10:00", "b": 516.8}, {"a": "2025-01-24 06:15:00", "b": 510.0}, {"a": "2025-01-24 06:20:00", "b": 490.4}, {"a": "2025-01-24 06:25:00", "b": 493.5}, {"a": "2025-01-24 06:30:00", "b": 487.25}, {"a": "2025-01-24 06:35:00", "b": 513.0}, {"a": "2025-01-24 06:40:00", "b": 523.3333333333334}, {"a": "2025-01-24 06:45:00", "b": 525.8}, {"a": "2025-01-24 06:50:00", "b": 535.4}, {"a": "2025-01-24 06:55:00", "b": 529.6}, {"a": "2025-01-24 07:00:00", "b": 528.0}, {"a": "2025-01-24 07:05:00", "b": 541.8}, {"a": "2025-01-24 07:10:00", "b": 562.6}, {"a": "2025-01-24 07:15:00", "b": 607.6}, {"a": "2025-01-24 07:20:00", "b": 631.8}, {"a": "2025-01-24 07:25:00", "b": 602.8}, {"a": "2025-01-24 07:30:00", "b": 618.6}, {"a": "2025-01-24 07:35:00", "b": 649.8}, {"a": "2025-01-24 07:40:00", "b": 646.4}, {"a": "2025-01-24 07:45:00", "b": 634.0}, {"a": "2025-01-24 07:50:00", "b": 629.6}, {"a": "2025-01-24 07:55:00", "b": 602.4}, {"a": "2025-01-24 08:00:00", "b": 573.8}, {"a": "2025-01-24 08:05:00", "b": 571.2}, {"a": "2025-01-24 08:10:00", "b": 557.75}, {"a": "2025-01-24 08:15:00", "b": 574.2}, {"a": "2025-01-24 08:20:00", "b": 585.0}, {"a": "2025-01-24 08:25:00", "b": 581.0}, {"a": "2025-01-24 08:30:00", "b": 569.4}, {"a": "2025-01-24 08:35:00", "b": 592.5}, {"a": "2025-01-24 08:40:00", "b": 603.5}, {"a": "2025-01-24 08:45:00", "b": 572.6}, {"a": "2025-01-24 08:50:00", "b": 561.4}, {"a": "2025-01-24 08:55:00", "b": 552.4}, {"a": "2025-01-24 09:00:00", "b": 551.8}, {"a": "2025-01-24 09:05:00", "b": 563.2}, {"a": "2025-01-24 09:10:00", "b": 560.75}, {"a": "2025-01-24 09:15:00", "b": 562.2}, {"a": "2025-01-24 09:20:00", "b": 552.6}, {"a": "2025-01-24 09:25:00", "b": 548.4}, {"a": "2025-01-24 09:30:00", "b": 544.2}, {"a": "2025-01-24 09:35:00", "b": 540.8}, {"a": "2025-01-24 09:40:00", "b": 534.75}, {"a": "2025-01-24 09:45:00", "b": 535.75}, {"a": "2025-01-24 09:50:00", "b": 524.2}, {"a": "2025-01-24 09:55:00", "b": 522.25}, {"a": "2025-01-24 10:00:00", "b": 519.0}, {"a": "2025-01-24 10:05:00", "b": 516.6}, {"a": "2025-01-24 10:10:00", "b": 510.75}, {"a": "2025-01-24 10:15:00", "b": 505.4}, {"a": "2025-01-24 10:20:00", "b": 491.2}, {"a": "2025-01-24 10:25:00", "b": 497.4}, {"a": "2025-01-24 10:30:00", "b": 489.2}, {"a": "2025-01-24 10:35:00", "b": 493.8}, {"a": "2025-01-24 10:40:00", "b": 494.8}, {"a": "2025-01-24 10:45:00", "b": 484.25}, {"a": "2025-01-24 10:50:00", "b": 476.5}, {"a": "2025-01-24 10:55:00", "b": 483.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    