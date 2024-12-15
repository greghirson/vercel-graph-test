
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-12-14 14:00:00", "b": 641.8}, {"a": "2024-12-14 14:05:00", "b": 637.75}, {"a": "2024-12-14 14:10:00", "b": 626.0}, {"a": "2024-12-14 14:15:00", "b": 615.75}, {"a": "2024-12-14 14:20:00", "b": 615.0}, {"a": "2024-12-14 14:25:00", "b": 613.25}, {"a": "2024-12-14 14:30:00", "b": 611.6}, {"a": "2024-12-14 14:35:00", "b": 604.8}, {"a": "2024-12-14 14:40:00", "b": 588.4}, {"a": "2024-12-14 14:45:00", "b": 587.25}, {"a": "2024-12-14 14:50:00", "b": 584.8}, {"a": "2024-12-14 14:55:00", "b": 573.5}, {"a": "2024-12-14 15:00:00", "b": 559.75}, {"a": "2024-12-14 15:05:00", "b": 548.0}, {"a": "2024-12-14 15:10:00", "b": 555.4}, {"a": "2024-12-14 15:15:00", "b": 565.3333333333334}, {"a": "2024-12-14 15:20:00", "b": 558.6666666666666}, {"a": "2024-12-14 15:25:00", "b": 573.0}, {"a": "2024-12-14 15:30:00", "b": 588.25}, {"a": "2024-12-14 15:35:00", "b": 610.8}, {"a": "2024-12-14 15:40:00", "b": 652.6}, {"a": "2024-12-14 15:45:00", "b": 632.4}, {"a": "2024-12-14 15:50:00", "b": 642.0}, {"a": "2024-12-14 15:55:00", "b": 625.0}, {"a": "2024-12-14 16:00:00", "b": 623.8}, {"a": "2024-12-14 16:05:00", "b": 634.25}, {"a": "2024-12-14 16:10:00", "b": 600.0}, {"a": "2024-12-14 16:15:00", "b": 582.4}, {"a": "2024-12-14 16:20:00", "b": 593.25}, {"a": "2024-12-14 16:25:00", "b": 589.6}, {"a": "2024-12-14 16:30:00", "b": 586.75}, {"a": "2024-12-14 16:35:00", "b": 578.0}, {"a": "2024-12-14 16:40:00", "b": 584.4}, {"a": "2024-12-14 16:45:00", "b": 595.75}, {"a": "2024-12-14 16:50:00", "b": 584.0}, {"a": "2024-12-14 16:55:00", "b": 559.0}, {"a": "2024-12-14 17:00:00", "b": 550.8}, {"a": "2024-12-14 17:05:00", "b": 552.4}, {"a": "2024-12-14 17:10:00", "b": 563.75}, {"a": "2024-12-14 17:15:00", "b": 566.6666666666666}, {"a": "2024-12-14 17:20:00", "b": 559.8}, {"a": "2024-12-14 17:25:00", "b": 558.75}, {"a": "2024-12-14 17:30:00", "b": 548.2}, {"a": "2024-12-14 17:35:00", "b": 524.0}, {"a": "2024-12-14 17:40:00", "b": 557.6}, {"a": "2024-12-14 17:45:00", "b": 548.5}, {"a": "2024-12-14 17:50:00", "b": 534.25}, {"a": "2024-12-14 17:55:00", "b": 534.0}, {"a": "2024-12-14 18:00:00", "b": 532.25}, {"a": "2024-12-14 18:05:00", "b": 538.6}, {"a": "2024-12-14 18:10:00", "b": 545.4}, {"a": "2024-12-14 18:15:00", "b": 571.75}, {"a": "2024-12-14 18:20:00", "b": 578.75}, {"a": "2024-12-14 18:25:00", "b": 574.5}, {"a": "2024-12-14 18:30:00", "b": 566.8}, {"a": "2024-12-14 18:35:00", "b": 582.6}, {"a": "2024-12-14 18:40:00", "b": 604.3333333333334}, {"a": "2024-12-14 18:45:00", "b": 603.6}, {"a": "2024-12-14 18:50:00", "b": 607.6}, {"a": "2024-12-14 18:55:00", "b": 605.8}, {"a": "2024-12-14 19:00:00", "b": 611.4}, {"a": "2024-12-14 19:05:00", "b": 629.0}, {"a": "2024-12-14 19:10:00", "b": 644.0}, {"a": "2024-12-14 19:15:00", "b": 659.0}, {"a": "2024-12-14 19:20:00", "b": 692.5}, {"a": "2024-12-14 19:25:00", "b": 721.4}, {"a": "2024-12-14 19:30:00", "b": 743.6}, {"a": "2024-12-14 19:35:00", "b": 728.25}, {"a": "2024-12-14 19:40:00", "b": 716.8}, {"a": "2024-12-14 19:45:00", "b": 724.4}, {"a": "2024-12-14 19:50:00", "b": 715.75}, {"a": "2024-12-14 19:55:00", "b": 723.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    