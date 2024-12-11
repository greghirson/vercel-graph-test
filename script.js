
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-10 12:00:00", "b": 550.4}, {"a": "2024-12-10 12:05:00", "b": 548.75}, {"a": "2024-12-10 12:10:00", "b": 535.0}, {"a": "2024-12-10 12:15:00", "b": 524.5}, {"a": "2024-12-10 12:20:00", "b": 529.75}, {"a": "2024-12-10 12:25:00", "b": 530.25}, {"a": "2024-12-10 12:30:00", "b": 541.25}, {"a": "2024-12-10 12:35:00", "b": 520.6}, {"a": "2024-12-10 12:40:00", "b": 518.2}, {"a": "2024-12-10 12:45:00", "b": 523.75}, {"a": "2024-12-10 12:50:00", "b": 529.25}, {"a": "2024-12-10 12:55:00", "b": 523.75}, {"a": "2024-12-10 13:00:00", "b": 523.6}, {"a": "2024-12-10 13:05:00", "b": 527.25}, {"a": "2024-12-10 13:10:00", "b": 524.8}, {"a": "2024-12-10 13:15:00", "b": 513.4}, {"a": "2024-12-10 13:20:00", "b": 511.75}, {"a": "2024-12-10 13:25:00", "b": 514.0}, {"a": "2024-12-10 13:30:00", "b": 510.8}, {"a": "2024-12-10 13:35:00", "b": 506.4}, {"a": "2024-12-10 13:40:00", "b": 517.4}, {"a": "2024-12-10 13:45:00", "b": 514.6}, {"a": "2024-12-10 13:50:00", "b": 504.0}, {"a": "2024-12-10 13:55:00", "b": 511.0}, {"a": "2024-12-10 14:00:00", "b": 495.5}, {"a": "2024-12-10 14:05:00", "b": 495.75}, {"a": "2024-12-10 14:10:00", "b": 501.8}, {"a": "2024-12-10 14:15:00", "b": 497.0}, {"a": "2024-12-10 14:20:00", "b": 499.0}, {"a": "2024-12-10 14:25:00", "b": 500.0}, {"a": "2024-12-10 14:30:00", "b": 501.5}, {"a": "2024-12-10 14:35:00", "b": 494.4}, {"a": "2024-12-10 14:40:00", "b": 486.0}, {"a": "2024-12-10 14:45:00", "b": 488.8}, {"a": "2024-12-10 14:50:00", "b": 506.8}, {"a": "2024-12-10 14:55:00", "b": 498.4}, {"a": "2024-12-10 15:00:00", "b": 489.5}, {"a": "2024-12-10 15:05:00", "b": 494.0}, {"a": "2024-12-10 15:10:00", "b": 496.2}, {"a": "2024-12-10 15:15:00", "b": 483.5}, {"a": "2024-12-10 15:20:00", "b": 482.4}, {"a": "2024-12-10 15:25:00", "b": 499.0}, {"a": "2024-12-10 15:30:00", "b": 488.8}, {"a": "2024-12-10 15:35:00", "b": 481.4}, {"a": "2024-12-10 15:40:00", "b": 486.25}, {"a": "2024-12-10 15:45:00", "b": 484.25}, {"a": "2024-12-10 15:50:00", "b": 477.8}, {"a": "2024-12-10 15:55:00", "b": 470.5}, {"a": "2024-12-10 16:00:00", "b": 468.6}, {"a": "2024-12-10 16:05:00", "b": 484.0}, {"a": "2024-12-10 16:10:00", "b": 490.25}, {"a": "2024-12-10 16:15:00", "b": 502.0}, {"a": "2024-12-10 16:20:00", "b": 508.3333333333333}, {"a": "2024-12-10 16:25:00", "b": 509.0}, {"a": "2024-12-10 16:30:00", "b": 514.2}, {"a": "2024-12-10 16:35:00", "b": 515.0}, {"a": "2024-12-10 16:40:00", "b": 514.6666666666666}, {"a": "2024-12-10 16:45:00", "b": 518.5}, {"a": "2024-12-10 16:50:00", "b": 519.0}, {"a": "2024-12-10 16:55:00", "b": 526.6666666666666}, {"a": "2024-12-10 17:00:00", "b": 520.0}, {"a": "2024-12-10 17:05:00", "b": 519.0}, {"a": "2024-12-10 17:10:00", "b": 534.2}, {"a": "2024-12-10 17:15:00", "b": 532.25}, {"a": "2024-12-10 17:20:00", "b": 541.25}, {"a": "2024-12-10 17:25:00", "b": 538.2}, {"a": "2024-12-10 17:30:00", "b": 551.6}, {"a": "2024-12-10 17:35:00", "b": 559.0}, {"a": "2024-12-10 17:40:00", "b": 551.0}, {"a": "2024-12-10 17:45:00", "b": 555.3333333333334}, {"a": "2024-12-10 17:50:00", "b": 553.4}, {"a": "2024-12-10 17:55:00", "b": 555.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    