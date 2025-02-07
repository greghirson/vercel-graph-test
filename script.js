
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-07 04:00:00", "b": 484.75}, {"a": "2025-02-07 04:05:00", "b": 489.2}, {"a": "2025-02-07 04:10:00", "b": 489.6}, {"a": "2025-02-07 04:15:00", "b": 491.4}, {"a": "2025-02-07 04:20:00", "b": 498.6}, {"a": "2025-02-07 04:25:00", "b": 498.2}, {"a": "2025-02-07 04:30:00", "b": 493.75}, {"a": "2025-02-07 04:35:00", "b": 486.5}, {"a": "2025-02-07 04:40:00", "b": 485.4}, {"a": "2025-02-07 04:45:00", "b": 497.6}, {"a": "2025-02-07 04:50:00", "b": 504.5}, {"a": "2025-02-07 04:55:00", "b": 505.8}, {"a": "2025-02-07 05:00:00", "b": 508.5}, {"a": "2025-02-07 05:05:00", "b": 500.4}, {"a": "2025-02-07 05:10:00", "b": 482.6}, {"a": "2025-02-07 05:15:00", "b": 500.75}, {"a": "2025-02-07 05:20:00", "b": 491.2}, {"a": "2025-02-07 05:25:00", "b": 481.2}, {"a": "2025-02-07 05:30:00", "b": 495.25}, {"a": "2025-02-07 05:35:00", "b": 489.6}, {"a": "2025-02-07 05:40:00", "b": 491.6}, {"a": "2025-02-07 05:45:00", "b": 509.2}, {"a": "2025-02-07 05:50:00", "b": 502.0}, {"a": "2025-02-07 05:55:00", "b": 497.25}, {"a": "2025-02-07 06:00:00", "b": 503.2}, {"a": "2025-02-07 06:05:00", "b": 498.5}, {"a": "2025-02-07 06:10:00", "b": 497.6}, {"a": "2025-02-07 06:15:00", "b": 495.0}, {"a": "2025-02-07 06:20:00", "b": 494.6}, {"a": "2025-02-07 06:25:00", "b": 495.5}, {"a": "2025-02-07 06:30:00", "b": 508.6}, {"a": "2025-02-07 06:35:00", "b": 512.2}, {"a": "2025-02-07 06:40:00", "b": 507.4}, {"a": "2025-02-07 06:45:00", "b": 502.8}, {"a": "2025-02-07 06:50:00", "b": 504.0}, {"a": "2025-02-07 06:55:00", "b": 511.0}, {"a": "2025-02-07 07:00:00", "b": 498.25}, {"a": "2025-02-07 07:05:00", "b": 495.75}, {"a": "2025-02-07 07:10:00", "b": 513.25}, {"a": "2025-02-07 07:15:00", "b": 552.6}, {"a": "2025-02-07 07:20:00", "b": 630.6}, {"a": "2025-02-07 07:25:00", "b": 644.75}, {"a": "2025-02-07 07:30:00", "b": 631.8}, {"a": "2025-02-07 07:35:00", "b": 633.8}, {"a": "2025-02-07 07:40:00", "b": 671.0}, {"a": "2025-02-07 07:45:00", "b": 717.2}, {"a": "2025-02-07 07:50:00", "b": 743.6}, {"a": "2025-02-07 07:55:00", "b": 772.75}, {"a": "2025-02-07 08:00:00", "b": 788.6}, {"a": "2025-02-07 08:05:00", "b": 788.0}, {"a": "2025-02-07 08:10:00", "b": 783.0}, {"a": "2025-02-07 08:15:00", "b": 765.4}, {"a": "2025-02-07 08:20:00", "b": 748.25}, {"a": "2025-02-07 08:25:00", "b": 740.0}, {"a": "2025-02-07 08:30:00", "b": 744.0}, {"a": "2025-02-07 08:35:00", "b": 750.0}, {"a": "2025-02-07 08:40:00", "b": 749.2}, {"a": "2025-02-07 08:45:00", "b": 750.6666666666666}, {"a": "2025-02-07 08:50:00", "b": 733.2}, {"a": "2025-02-07 08:55:00", "b": 722.25}, {"a": "2025-02-07 09:00:00", "b": 735.0}, {"a": "2025-02-07 09:05:00", "b": 735.0}, {"a": "2025-02-07 09:10:00", "b": 715.25}, {"a": "2025-02-07 09:15:00", "b": 713.3333333333334}, {"a": "2025-02-07 09:20:00", "b": 691.8}, {"a": "2025-02-07 09:25:00", "b": 682.0}, {"a": "2025-02-07 09:30:00", "b": 681.5}, {"a": "2025-02-07 09:35:00", "b": 670.25}, {"a": "2025-02-07 09:40:00", "b": 668.4}, {"a": "2025-02-07 09:45:00", "b": 700.75}, {"a": "2025-02-07 09:50:00", "b": 676.2}, {"a": "2025-02-07 09:55:00", "b": 614.0}, {"a": "2025-02-07 10:00:00", "b": 591.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    