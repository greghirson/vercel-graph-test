
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-17 15:00:00", "b": 418.0}, {"a": "2024-11-17 15:05:00", "b": 413.8}, {"a": "2024-11-17 15:10:00", "b": 405.0}, {"a": "2024-11-17 15:15:00", "b": 415.6}, {"a": "2024-11-17 15:20:00", "b": 426.0}, {"a": "2024-11-17 15:25:00", "b": 410.25}, {"a": "2024-11-17 15:30:00", "b": 409.2}, {"a": "2024-11-17 15:35:00", "b": 411.75}, {"a": "2024-11-17 15:40:00", "b": 418.0}, {"a": "2024-11-17 15:45:00", "b": 430.8}, {"a": "2024-11-17 15:50:00", "b": 502.4}, {"a": "2024-11-17 15:55:00", "b": 514.0}, {"a": "2024-11-17 16:00:00", "b": 500.25}, {"a": "2024-11-17 16:05:00", "b": 510.8}, {"a": "2024-11-17 16:10:00", "b": 526.6666666666666}, {"a": "2024-11-17 16:15:00", "b": 528.0}, {"a": "2024-11-17 16:20:00", "b": 531.0}, {"a": "2024-11-17 16:25:00", "b": 558.0}, {"a": "2024-11-17 16:30:00", "b": 542.6}, {"a": "2024-11-17 16:35:00", "b": 540.8}, {"a": "2024-11-17 16:40:00", "b": 585.6}, {"a": "2024-11-17 16:45:00", "b": 563.0}, {"a": "2024-11-17 16:50:00", "b": 548.0}, {"a": "2024-11-17 16:55:00", "b": 547.8}, {"a": "2024-11-17 17:00:00", "b": 536.2}, {"a": "2024-11-17 17:05:00", "b": 520.6666666666666}, {"a": "2024-11-17 17:10:00", "b": 528.6}, {"a": "2024-11-17 17:15:00", "b": 512.8}, {"a": "2024-11-17 17:20:00", "b": 502.75}, {"a": "2024-11-17 17:25:00", "b": 523.8}, {"a": "2024-11-17 17:30:00", "b": 593.75}, {"a": "2024-11-17 17:35:00", "b": 654.0}, {"a": "2024-11-17 17:40:00", "b": 644.6}, {"a": "2024-11-17 17:45:00", "b": 634.2}, {"a": "2024-11-17 17:50:00", "b": 626.8}, {"a": "2024-11-17 17:55:00", "b": 538.8}, {"a": "2024-11-17 18:00:00", "b": 519.25}, {"a": "2024-11-17 18:05:00", "b": 526.2}, {"a": "2024-11-17 18:10:00", "b": 552.4}, {"a": "2024-11-17 18:15:00", "b": 565.75}, {"a": "2024-11-17 18:20:00", "b": 643.0}, {"a": "2024-11-17 18:25:00", "b": 630.2}, {"a": "2024-11-17 18:30:00", "b": 648.0}, {"a": "2024-11-17 18:35:00", "b": 575.6}, {"a": "2024-11-17 18:40:00", "b": 550.5}, {"a": "2024-11-17 18:45:00", "b": 561.25}, {"a": "2024-11-17 18:50:00", "b": 557.4}, {"a": "2024-11-17 18:55:00", "b": 546.0}, {"a": "2024-11-17 19:00:00", "b": 535.25}, {"a": "2024-11-17 19:05:00", "b": 532.0}, {"a": "2024-11-17 19:10:00", "b": 529.2}, {"a": "2024-11-17 19:15:00", "b": 548.2}, {"a": "2024-11-17 19:20:00", "b": 563.6}, {"a": "2024-11-17 19:25:00", "b": 564.8}, {"a": "2024-11-17 19:30:00", "b": 555.75}, {"a": "2024-11-17 19:35:00", "b": 559.2}, {"a": "2024-11-17 19:40:00", "b": 603.0}, {"a": "2024-11-17 19:45:00", "b": 625.6}, {"a": "2024-11-17 19:50:00", "b": 632.2}, {"a": "2024-11-17 19:55:00", "b": 626.0}, {"a": "2024-11-17 20:00:00", "b": 642.5}, {"a": "2024-11-17 20:05:00", "b": 689.0}, {"a": "2024-11-17 20:10:00", "b": 698.0}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    