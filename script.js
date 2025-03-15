
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-03-14 13:00:00", "b": 484.0}, {"a": "2025-03-14 13:05:00", "b": 475.0}, {"a": "2025-03-14 13:10:00", "b": 494.3333333333333}, {"a": "2025-03-14 13:15:00", "b": 491.0}, {"a": "2025-03-14 13:20:00", "b": 475.4}, {"a": "2025-03-14 13:25:00", "b": 465.0}, {"a": "2025-03-14 13:30:00", "b": 461.8}, {"a": "2025-03-14 13:35:00", "b": 462.0}, {"a": "2025-03-14 13:40:00", "b": 467.5}, {"a": "2025-03-14 13:45:00", "b": 460.2}, {"a": "2025-03-14 13:50:00", "b": 452.4}, {"a": "2025-03-14 13:55:00", "b": 445.4}, {"a": "2025-03-14 14:00:00", "b": 440.25}, {"a": "2025-03-14 14:05:00", "b": 446.0}, {"a": "2025-03-14 14:10:00", "b": 453.2}, {"a": "2025-03-14 14:15:00", "b": 437.6}, {"a": "2025-03-14 14:20:00", "b": 441.75}, {"a": "2025-03-14 14:25:00", "b": 436.25}, {"a": "2025-03-14 14:30:00", "b": 443.0}, {"a": "2025-03-14 14:35:00", "b": 423.0}, {"a": "2025-03-14 14:40:00", "b": 416.0}, {"a": "2025-03-14 14:45:00", "b": 409.6}, {"a": "2025-03-14 14:50:00", "b": 418.0}, {"a": "2025-03-14 14:55:00", "b": 469.2}, {"a": "2025-03-14 15:00:00", "b": 543.75}, {"a": "2025-03-14 15:05:00", "b": 523.0}, {"a": "2025-03-14 15:10:00", "b": 490.0}, {"a": "2025-03-14 15:15:00", "b": 518.4}, {"a": "2025-03-14 15:20:00", "b": 513.0}, {"a": "2025-03-14 15:25:00", "b": 490.8}, {"a": "2025-03-14 15:30:00", "b": 472.0}, {"a": "2025-03-14 15:35:00", "b": 463.5}, {"a": "2025-03-14 15:40:00", "b": 463.75}, {"a": "2025-03-14 15:45:00", "b": 463.75}, {"a": "2025-03-14 15:50:00", "b": 449.0}, {"a": "2025-03-14 15:55:00", "b": 444.0}, {"a": "2025-03-14 16:00:00", "b": 449.2}, {"a": "2025-03-14 16:05:00", "b": 470.6}, {"a": "2025-03-14 16:10:00", "b": 459.75}, {"a": "2025-03-14 16:15:00", "b": 532.6}, {"a": "2025-03-14 16:20:00", "b": 535.4}, {"a": "2025-03-14 16:25:00", "b": 502.0}, {"a": "2025-03-14 16:30:00", "b": 495.6666666666667}, {"a": "2025-03-14 16:35:00", "b": 496.0}, {"a": "2025-03-14 16:40:00", "b": 495.6}, {"a": "2025-03-14 16:45:00", "b": 486.4}, {"a": "2025-03-14 16:50:00", "b": 486.0}, {"a": "2025-03-14 16:55:00", "b": 478.5}, {"a": "2025-03-14 17:00:00", "b": 474.75}, {"a": "2025-03-14 17:05:00", "b": 480.75}, {"a": "2025-03-14 17:10:00", "b": 476.8}, {"a": "2025-03-14 17:15:00", "b": 488.8}, {"a": "2025-03-14 17:20:00", "b": 491.6}, {"a": "2025-03-14 17:25:00", "b": 487.6666666666667}, {"a": "2025-03-14 17:30:00", "b": 491.6}, {"a": "2025-03-14 17:35:00", "b": 523.2}, {"a": "2025-03-14 17:40:00", "b": 510.6}, {"a": "2025-03-14 17:45:00", "b": 541.6}, {"a": "2025-03-14 17:50:00", "b": 559.4}, {"a": "2025-03-14 17:55:00", "b": 565.6}, {"a": "2025-03-14 18:00:00", "b": 522.4}, {"a": "2025-03-14 18:05:00", "b": 518.0}, {"a": "2025-03-14 18:10:00", "b": 511.75}, {"a": "2025-03-14 18:15:00", "b": 503.2}, {"a": "2025-03-14 18:20:00", "b": 499.5}, {"a": "2025-03-14 18:25:00", "b": 507.75}, {"a": "2025-03-14 18:30:00", "b": 526.3333333333334}, {"a": "2025-03-14 18:35:00", "b": 534.75}, {"a": "2025-03-14 18:40:00", "b": 550.25}, {"a": "2025-03-14 18:45:00", "b": 571.4}, {"a": "2025-03-14 18:50:00", "b": 570.2}, {"a": "2025-03-14 18:55:00", "b": 543.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    