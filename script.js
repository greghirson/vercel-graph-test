
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-15 13:00:00", "b": 416.2}, {"a": "2024-12-15 13:05:00", "b": 444.2}, {"a": "2024-12-15 13:10:00", "b": 447.6}, {"a": "2024-12-15 13:15:00", "b": 455.8}, {"a": "2024-12-15 13:20:00", "b": 459.4}, {"a": "2024-12-15 13:25:00", "b": 446.0}, {"a": "2024-12-15 13:30:00", "b": 443.4}, {"a": "2024-12-15 13:35:00", "b": 439.0}, {"a": "2024-12-15 13:40:00", "b": 434.5}, {"a": "2024-12-15 13:45:00", "b": 443.25}, {"a": "2024-12-15 13:50:00", "b": 434.5}, {"a": "2024-12-15 13:55:00", "b": 423.6}, {"a": "2024-12-15 14:00:00", "b": 427.4}, {"a": "2024-12-15 14:05:00", "b": 421.6666666666667}, {"a": "2024-12-15 14:10:00", "b": 409.6}, {"a": "2024-12-15 14:15:00", "b": 408.0}, {"a": "2024-12-15 14:20:00", "b": 411.0}, {"a": "2024-12-15 14:25:00", "b": 411.0}, {"a": "2024-12-15 14:30:00", "b": 408.6}, {"a": "2024-12-15 14:35:00", "b": 405.3333333333333}, {"a": "2024-12-15 14:40:00", "b": 408.0}, {"a": "2024-12-15 14:45:00", "b": 407.6666666666667}, {"a": "2024-12-15 14:50:00", "b": 406.0}, {"a": "2024-12-15 14:55:00", "b": 403.0}, {"a": "2024-12-15 15:00:00", "b": 402.5}, {"a": "2024-12-15 15:05:00", "b": 403.5}, {"a": "2024-12-15 15:10:00", "b": 403.0}, {"a": "2024-12-15 15:15:00", "b": 403.0}, {"a": "2024-12-15 15:20:00", "b": 401.5}, {"a": "2024-12-15 15:25:00", "b": 402.4}, {"a": "2024-12-15 15:30:00", "b": 403.0}, {"a": "2024-12-15 15:35:00", "b": 402.0}, {"a": "2024-12-15 15:40:00", "b": 402.5}, {"a": "2024-12-15 15:45:00", "b": 403.25}, {"a": "2024-12-15 15:50:00", "b": 401.8}, {"a": "2024-12-15 15:55:00", "b": 402.8}, {"a": "2024-12-15 16:00:00", "b": 402.3333333333333}, {"a": "2024-12-15 16:05:00", "b": 402.3333333333333}, {"a": "2024-12-15 16:10:00", "b": 402.0}, {"a": "2024-12-15 16:15:00", "b": 405.8}, {"a": "2024-12-15 16:20:00", "b": 405.6}, {"a": "2024-12-15 16:25:00", "b": 405.0}, {"a": "2024-12-15 16:30:00", "b": 407.5}, {"a": "2024-12-15 16:35:00", "b": 424.0}, {"a": "2024-12-15 16:40:00", "b": 460.2}, {"a": "2024-12-15 16:45:00", "b": 490.0}, {"a": "2024-12-15 16:50:00", "b": 517.0}, {"a": "2024-12-15 16:55:00", "b": 502.0}, {"a": "2024-12-15 17:00:00", "b": 520.25}, {"a": "2024-12-15 17:05:00", "b": 539.0}, {"a": "2024-12-15 17:10:00", "b": 550.8}, {"a": "2024-12-15 17:15:00", "b": 538.2}, {"a": "2024-12-15 17:20:00", "b": 543.75}, {"a": "2024-12-15 17:25:00", "b": 550.5}, {"a": "2024-12-15 17:30:00", "b": 562.75}, {"a": "2024-12-15 17:35:00", "b": 596.2}, {"a": "2024-12-15 17:40:00", "b": 621.0}, {"a": "2024-12-15 17:45:00", "b": 596.6}, {"a": "2024-12-15 17:50:00", "b": 608.0}, {"a": "2024-12-15 17:55:00", "b": 617.4}, {"a": "2024-12-15 18:00:00", "b": 628.6}, {"a": "2024-12-15 18:05:00", "b": 626.5}, {"a": "2024-12-15 18:10:00", "b": 625.0}, {"a": "2024-12-15 18:15:00", "b": 629.0}, {"a": "2024-12-15 18:20:00", "b": 620.8}, {"a": "2024-12-15 18:25:00", "b": 658.2}, {"a": "2024-12-15 18:30:00", "b": 717.6}, {"a": "2024-12-15 18:35:00", "b": 776.8}, {"a": "2024-12-15 18:40:00", "b": 813.4}, {"a": "2024-12-15 18:45:00", "b": 829.2}, {"a": "2024-12-15 18:50:00", "b": 840.4}, {"a": "2024-12-15 18:55:00", "b": 850.6}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    