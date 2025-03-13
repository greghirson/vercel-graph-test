
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-12 16:00:00", "b": 414.75}, {"a": "2025-03-12 16:05:00", "b": 437.5}, {"a": "2025-03-12 16:10:00", "b": 465.2}, {"a": "2025-03-12 16:15:00", "b": 503.0}, {"a": "2025-03-12 16:20:00", "b": 541.75}, {"a": "2025-03-12 16:25:00", "b": 554.5}, {"a": "2025-03-12 16:30:00", "b": 597.6}, {"a": "2025-03-12 16:35:00", "b": 610.0}, {"a": "2025-03-12 16:40:00", "b": 627.4}, {"a": "2025-03-12 16:45:00", "b": 642.0}, {"a": "2025-03-12 16:50:00", "b": 564.6}, {"a": "2025-03-12 16:55:00", "b": 542.25}, {"a": "2025-03-12 17:00:00", "b": 503.6}, {"a": "2025-03-12 17:05:00", "b": 483.2}, {"a": "2025-03-12 17:10:00", "b": 468.2}, {"a": "2025-03-12 17:15:00", "b": 454.25}, {"a": "2025-03-12 17:20:00", "b": 449.5}, {"a": "2025-03-12 17:25:00", "b": 446.25}, {"a": "2025-03-12 17:30:00", "b": 439.5}, {"a": "2025-03-12 17:35:00", "b": 438.6666666666667}, {"a": "2025-03-12 17:40:00", "b": 447.8}, {"a": "2025-03-12 17:45:00", "b": 446.6}, {"a": "2025-03-12 17:50:00", "b": 442.25}, {"a": "2025-03-12 17:55:00", "b": 463.2}, {"a": "2025-03-12 18:00:00", "b": 472.5}, {"a": "2025-03-12 18:05:00", "b": 473.0}, {"a": "2025-03-12 18:10:00", "b": 455.8}, {"a": "2025-03-12 18:15:00", "b": 444.8}, {"a": "2025-03-12 18:20:00", "b": 432.0}, {"a": "2025-03-12 18:25:00", "b": 416.4}, {"a": "2025-03-12 18:30:00", "b": 419.6}, {"a": "2025-03-12 18:35:00", "b": 423.6}, {"a": "2025-03-12 18:40:00", "b": 432.5}, {"a": "2025-03-12 18:45:00", "b": 430.0}, {"a": "2025-03-12 18:50:00", "b": 429.8}, {"a": "2025-03-12 18:55:00", "b": 440.6}, {"a": "2025-03-12 19:00:00", "b": 440.4}, {"a": "2025-03-12 19:05:00", "b": 441.6}, {"a": "2025-03-12 19:10:00", "b": 467.0}, {"a": "2025-03-12 19:15:00", "b": 475.8}, {"a": "2025-03-12 19:20:00", "b": 461.8}, {"a": "2025-03-12 19:25:00", "b": 462.0}, {"a": "2025-03-12 19:30:00", "b": 474.6}, {"a": "2025-03-12 19:35:00", "b": 492.8}, {"a": "2025-03-12 19:40:00", "b": 512.4}, {"a": "2025-03-12 19:45:00", "b": 513.5}, {"a": "2025-03-12 19:50:00", "b": 522.75}, {"a": "2025-03-12 19:55:00", "b": 545.0}, {"a": "2025-03-12 20:00:00", "b": 547.2}, {"a": "2025-03-12 20:05:00", "b": 562.8}, {"a": "2025-03-12 20:10:00", "b": 604.2}, {"a": "2025-03-12 20:15:00", "b": 638.75}, {"a": "2025-03-12 20:20:00", "b": 659.0}, {"a": "2025-03-12 20:25:00", "b": 672.0}, {"a": "2025-03-12 20:30:00", "b": 660.0}, {"a": "2025-03-12 20:35:00", "b": 670.2}, {"a": "2025-03-12 20:40:00", "b": 674.25}, {"a": "2025-03-12 20:45:00", "b": 671.0}, {"a": "2025-03-12 20:50:00", "b": 661.8}, {"a": "2025-03-12 20:55:00", "b": 650.2}, {"a": "2025-03-12 21:00:00", "b": 653.6}, {"a": "2025-03-12 21:05:00", "b": 659.3333333333334}, {"a": "2025-03-12 21:10:00", "b": 662.0}, {"a": "2025-03-12 21:15:00", "b": 680.2}, {"a": "2025-03-12 21:20:00", "b": 725.0}, {"a": "2025-03-12 21:25:00", "b": 736.5}, {"a": "2025-03-12 21:30:00", "b": 742.0}, {"a": "2025-03-12 21:35:00", "b": 746.6}, {"a": "2025-03-12 21:40:00", "b": 730.4}, {"a": "2025-03-12 21:45:00", "b": 718.4}, {"a": "2025-03-12 21:50:00", "b": 699.0}, {"a": "2025-03-12 21:55:00", "b": 691.25}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    