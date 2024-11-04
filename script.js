
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2024-11-03 10:30:00", "b": 499.75}, {"a": "2024-11-03 10:35:00", "b": 489.0}, {"a": "2024-11-03 10:40:00", "b": 490.6}, {"a": "2024-11-03 10:45:00", "b": 489.0}, {"a": "2024-11-03 10:50:00", "b": 485.6}, {"a": "2024-11-03 10:55:00", "b": 482.6}, {"a": "2024-11-03 11:00:00", "b": 483.2}, {"a": "2024-11-03 11:05:00", "b": 471.5}, {"a": "2024-11-03 11:10:00", "b": 486.0}, {"a": "2024-11-03 11:15:00", "b": 501.0}, {"a": "2024-11-03 11:20:00", "b": 492.6666666666667}, {"a": "2024-11-03 11:25:00", "b": 483.0}, {"a": "2024-11-03 11:30:00", "b": 485.5}, {"a": "2024-11-03 11:35:00", "b": 478.4}, {"a": "2024-11-03 11:40:00", "b": 477.5}, {"a": "2024-11-03 11:45:00", "b": 478.0}, {"a": "2024-11-03 11:50:00", "b": 481.25}, {"a": "2024-11-03 11:55:00", "b": 466.4}, {"a": "2024-11-03 12:00:00", "b": 473.8}, {"a": "2024-11-03 12:05:00", "b": 489.8}, {"a": "2024-11-03 12:10:00", "b": 481.2}, {"a": "2024-11-03 12:15:00", "b": 486.0}, {"a": "2024-11-03 12:20:00", "b": 482.75}, {"a": "2024-11-03 12:25:00", "b": 500.4}, {"a": "2024-11-03 12:30:00", "b": 506.8}, {"a": "2024-11-03 12:35:00", "b": 517.4}, {"a": "2024-11-03 12:40:00", "b": 635.4}, {"a": "2024-11-03 12:45:00", "b": 660.25}, {"a": "2024-11-03 12:50:00", "b": 648.0}, {"a": "2024-11-03 12:55:00", "b": 651.4}, {"a": "2024-11-03 13:00:00", "b": 643.6}, {"a": "2024-11-03 13:05:00", "b": 618.8}, {"a": "2024-11-03 13:10:00", "b": 604.2}, {"a": "2024-11-03 13:15:00", "b": 603.75}, {"a": "2024-11-03 13:20:00", "b": 592.3333333333334}, {"a": "2024-11-03 13:25:00", "b": 588.0}, {"a": "2024-11-03 13:30:00", "b": 598.4}, {"a": "2024-11-03 13:35:00", "b": 611.4}, {"a": "2024-11-03 13:40:00", "b": 603.25}, {"a": "2024-11-03 13:45:00", "b": 584.2}, {"a": "2024-11-03 13:50:00", "b": 601.0}, {"a": "2024-11-03 13:55:00", "b": 593.8}, {"a": "2024-11-03 14:00:00", "b": 580.2}, {"a": "2024-11-03 14:05:00", "b": 587.4}, {"a": "2024-11-03 14:10:00", "b": 597.8}, {"a": "2024-11-03 14:15:00", "b": 610.6}, {"a": "2024-11-03 14:20:00", "b": 593.5}, {"a": "2024-11-03 14:25:00", "b": 586.6}, {"a": "2024-11-03 14:30:00", "b": 605.6}, {"a": "2024-11-03 14:35:00", "b": 603.0}, {"a": "2024-11-03 14:40:00", "b": 585.75}, {"a": "2024-11-03 14:45:00", "b": 602.5}, {"a": "2024-11-03 14:50:00", "b": 606.2}, {"a": "2024-11-03 14:55:00", "b": 625.8}, {"a": "2024-11-03 15:00:00", "b": 646.4}, {"a": "2024-11-03 15:05:00", "b": 639.6}, {"a": "2024-11-03 15:10:00", "b": 635.2}, {"a": "2024-11-03 15:15:00", "b": 641.0}, {"a": "2024-11-03 15:20:00", "b": 655.4}, {"a": "2024-11-03 15:25:00", "b": 671.8}, {"a": "2024-11-03 15:30:00", "b": 692.6}, {"a": "2024-11-03 15:35:00", "b": 706.4}, {"a": "2024-11-03 15:40:00", "b": 701.2}, {"a": "2024-11-03 15:45:00", "b": 701.0}, {"a": "2024-11-03 15:50:00", "b": 700.0}, {"a": "2024-11-03 15:55:00", "b": 695.25}, {"a": "2024-11-03 16:00:00", "b": 699.0}, {"a": "2024-11-03 16:05:00", "b": 699.6}, {"a": "2024-11-03 16:10:00", "b": 707.25}, {"a": "2024-11-03 16:15:00", "b": 738.4}, {"a": "2024-11-03 16:20:00", "b": 792.4}, {"a": "2024-11-03 16:25:00", "b": 803.5}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    