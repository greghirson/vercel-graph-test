
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-10-23 15:10:00", "b": 401.0}, {"a": "2024-10-23 15:15:00", "b": 401.6666666666667}, {"a": "2024-10-23 15:20:00", "b": 402.25}, {"a": "2024-10-23 15:25:00", "b": 402.5}, {"a": "2024-10-23 15:30:00", "b": 401.25}, {"a": "2024-10-23 15:35:00", "b": 402.2}, {"a": "2024-10-23 15:40:00", "b": 402.75}, {"a": "2024-10-23 15:45:00", "b": 402.3333333333333}, {"a": "2024-10-23 15:50:00", "b": 402.6}, {"a": "2024-10-23 15:55:00", "b": 401.4}, {"a": "2024-10-23 16:00:00", "b": 402.5}, {"a": "2024-10-23 16:05:00", "b": 401.3333333333333}, {"a": "2024-10-23 16:10:00", "b": 403.0}, {"a": "2024-10-23 16:15:00", "b": 401.75}, {"a": "2024-10-23 16:20:00", "b": 401.75}, {"a": "2024-10-23 16:25:00", "b": 402.0}, {"a": "2024-10-23 16:30:00", "b": 402.8}, {"a": "2024-10-23 16:35:00", "b": 402.0}, {"a": "2024-10-23 16:40:00", "b": 401.0}, {"a": "2024-10-23 16:45:00", "b": 401.8}, {"a": "2024-10-23 16:50:00", "b": 401.6}, {"a": "2024-10-23 16:55:00", "b": 401.5}, {"a": "2024-10-23 17:00:00", "b": 402.0}, {"a": "2024-10-23 17:05:00", "b": 402.25}, {"a": "2024-10-23 17:10:00", "b": 401.0}, {"a": "2024-10-23 17:15:00", "b": 401.75}, {"a": "2024-10-23 17:20:00", "b": 402.5}, {"a": "2024-10-23 17:25:00", "b": 401.5}, {"a": "2024-10-23 17:30:00", "b": 402.5}, {"a": "2024-10-23 17:35:00", "b": 404.25}, {"a": "2024-10-23 17:40:00", "b": 403.6666666666667}, {"a": "2024-10-23 17:45:00", "b": 401.4}, {"a": "2024-10-23 17:50:00", "b": 402.4}, {"a": "2024-10-23 17:55:00", "b": 401.6}, {"a": "2024-10-23 18:00:00", "b": 407.3333333333333}, {"a": "2024-10-23 18:05:00", "b": 407.0}, {"a": "2024-10-23 18:10:00", "b": 408.0}, {"a": "2024-10-23 18:15:00", "b": 432.6}, {"a": "2024-10-23 18:20:00", "b": 463.5}, {"a": "2024-10-23 18:25:00", "b": 488.2}, {"a": "2024-10-23 18:30:00", "b": 511.4}, {"a": "2024-10-23 18:35:00", "b": 525.0}, {"a": "2024-10-23 18:40:00", "b": 529.4}, {"a": "2024-10-23 18:45:00", "b": 529.4}, {"a": "2024-10-23 18:50:00", "b": 533.6}, {"a": "2024-10-23 18:55:00", "b": 559.0}, {"a": "2024-10-23 19:00:00", "b": 567.8}, {"a": "2024-10-23 19:05:00", "b": 576.0}, {"a": "2024-10-23 19:10:00", "b": 591.4}, {"a": "2024-10-23 19:15:00", "b": 607.6}, {"a": "2024-10-23 19:20:00", "b": 594.8}, {"a": "2024-10-23 19:25:00", "b": 588.8}, {"a": "2024-10-23 19:30:00", "b": 572.2}, {"a": "2024-10-23 19:35:00", "b": 571.5}, {"a": "2024-10-23 19:40:00", "b": 582.25}, {"a": "2024-10-23 19:45:00", "b": 598.2}, {"a": "2024-10-23 19:50:00", "b": 587.0}, {"a": "2024-10-23 19:55:00", "b": 573.4}, {"a": "2024-10-23 20:00:00", "b": 581.2}, {"a": "2024-10-23 20:05:00", "b": 600.2}, {"a": "2024-10-23 20:10:00", "b": 609.0}, {"a": "2024-10-23 20:15:00", "b": 632.8}, {"a": "2024-10-23 20:20:00", "b": 650.2}, {"a": "2024-10-23 20:25:00", "b": 633.0}, {"a": "2024-10-23 20:30:00", "b": 630.4}, {"a": "2024-10-23 20:35:00", "b": 645.6}, {"a": "2024-10-23 20:40:00", "b": 648.75}, {"a": "2024-10-23 20:45:00", "b": 610.2}, {"a": "2024-10-23 20:50:00", "b": 560.0}, {"a": "2024-10-23 20:55:00", "b": 550.8}, {"a": "2024-10-23 21:00:00", "b": 540.4}, {"a": "2024-10-23 21:05:00", "b": 563.8}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    