
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-19 14:00:00", "b": 527.2}, {"a": "2024-11-19 14:05:00", "b": 519.3333333333334}, {"a": "2024-11-19 14:10:00", "b": 508.75}, {"a": "2024-11-19 14:15:00", "b": 504.25}, {"a": "2024-11-19 14:20:00", "b": 505.2}, {"a": "2024-11-19 14:25:00", "b": 505.0}, {"a": "2024-11-19 14:30:00", "b": 495.0}, {"a": "2024-11-19 14:35:00", "b": 497.4}, {"a": "2024-11-19 14:40:00", "b": 491.75}, {"a": "2024-11-19 14:45:00", "b": 489.4}, {"a": "2024-11-19 14:50:00", "b": 481.5}, {"a": "2024-11-19 14:55:00", "b": 471.75}, {"a": "2024-11-19 15:00:00", "b": 487.4}, {"a": "2024-11-19 15:05:00", "b": 500.8}, {"a": "2024-11-19 15:10:00", "b": 475.4}, {"a": "2024-11-19 15:15:00", "b": 479.0}, {"a": "2024-11-19 15:20:00", "b": 484.75}, {"a": "2024-11-19 15:25:00", "b": 492.6}, {"a": "2024-11-19 15:30:00", "b": 503.6}, {"a": "2024-11-19 15:35:00", "b": 517.25}, {"a": "2024-11-19 15:40:00", "b": 515.6}, {"a": "2024-11-19 15:45:00", "b": 497.8}, {"a": "2024-11-19 15:50:00", "b": 487.25}, {"a": "2024-11-19 15:55:00", "b": 492.0}, {"a": "2024-11-19 16:00:00", "b": 480.6}, {"a": "2024-11-19 16:05:00", "b": 465.2}, {"a": "2024-11-19 16:10:00", "b": 464.6}, {"a": "2024-11-19 16:15:00", "b": 483.0}, {"a": "2024-11-19 16:20:00", "b": 488.8}, {"a": "2024-11-19 16:25:00", "b": 474.0}, {"a": "2024-11-19 16:30:00", "b": 474.2}, {"a": "2024-11-19 16:35:00", "b": 477.0}, {"a": "2024-11-19 16:40:00", "b": 483.8}, {"a": "2024-11-19 16:45:00", "b": 493.5}, {"a": "2024-11-19 16:50:00", "b": 504.8}, {"a": "2024-11-19 16:55:00", "b": 500.2}, {"a": "2024-11-19 17:00:00", "b": 488.3333333333333}, {"a": "2024-11-19 17:05:00", "b": 494.6}, {"a": "2024-11-19 17:10:00", "b": 505.3333333333333}, {"a": "2024-11-19 17:15:00", "b": 497.75}, {"a": "2024-11-19 17:20:00", "b": 513.75}, {"a": "2024-11-19 17:25:00", "b": 520.0}, {"a": "2024-11-19 17:30:00", "b": 521.5}, {"a": "2024-11-19 17:35:00", "b": 513.75}, {"a": "2024-11-19 17:40:00", "b": 510.75}, {"a": "2024-11-19 17:45:00", "b": 522.6666666666666}, {"a": "2024-11-19 17:50:00", "b": 529.6}, {"a": "2024-11-19 17:55:00", "b": 500.75}, {"a": "2024-11-19 18:00:00", "b": 512.6}, {"a": "2024-11-19 18:05:00", "b": 527.4}, {"a": "2024-11-19 18:10:00", "b": 564.4}, {"a": "2024-11-19 18:15:00", "b": 591.8}, {"a": "2024-11-19 18:20:00", "b": 606.0}, {"a": "2024-11-19 18:25:00", "b": 612.6}, {"a": "2024-11-19 18:30:00", "b": 617.5}, {"a": "2024-11-19 18:35:00", "b": 626.25}, {"a": "2024-11-19 18:40:00", "b": 639.5}, {"a": "2024-11-19 18:45:00", "b": 641.6}, {"a": "2024-11-19 18:50:00", "b": 640.75}, {"a": "2024-11-19 18:55:00", "b": 656.6}, {"a": "2024-11-19 19:00:00", "b": 666.6}, {"a": "2024-11-19 19:05:00", "b": 659.4}, {"a": "2024-11-19 19:10:00", "b": 650.75}, {"a": "2024-11-19 19:15:00", "b": 638.2}, {"a": "2024-11-19 19:20:00", "b": 636.0}, {"a": "2024-11-19 19:25:00", "b": 631.5}, {"a": "2024-11-19 19:30:00", "b": 638.6}, {"a": "2024-11-19 19:35:00", "b": 647.3333333333334}, {"a": "2024-11-19 19:40:00", "b": 647.0}, {"a": "2024-11-19 19:45:00", "b": 647.0}, {"a": "2024-11-19 19:50:00", "b": 640.4}, {"a": "2024-11-19 19:55:00", "b": 649.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    