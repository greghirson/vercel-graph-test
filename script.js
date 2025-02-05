
    var yourVlSpec = {
      $schema: "https://vega.github.io/schema/vega-lite/v5.json",
      description: "CO2 sensor data chart",
      data: {
        values: [{"a": "2025-02-04 18:00:00", "b": 414.0}, {"a": "2025-02-04 18:05:00", "b": 409.0}, {"a": "2025-02-04 18:10:00", "b": 412.5}, {"a": "2025-02-04 18:15:00", "b": 419.5}, {"a": "2025-02-04 18:20:00", "b": 422.5}, {"a": "2025-02-04 18:25:00", "b": 420.3333333333333}, {"a": "2025-02-04 18:30:00", "b": 421.75}, {"a": "2025-02-04 18:35:00", "b": 426.2}, {"a": "2025-02-04 18:40:00", "b": 435.6}, {"a": "2025-02-04 18:45:00", "b": 438.0}, {"a": "2025-02-04 18:50:00", "b": 439.0}, {"a": "2025-02-04 18:55:00", "b": 445.8}, {"a": "2025-02-04 19:00:00", "b": 454.6666666666667}, {"a": "2025-02-04 19:05:00", "b": 452.75}, {"a": "2025-02-04 19:10:00", "b": 453.25}, {"a": "2025-02-04 19:15:00", "b": 457.4}, {"a": "2025-02-04 19:20:00", "b": 462.4}, {"a": "2025-02-04 19:25:00", "b": 471.0}, {"a": "2025-02-04 19:30:00", "b": 477.0}, {"a": "2025-02-04 19:35:00", "b": 479.4}, {"a": "2025-02-04 19:40:00", "b": 481.75}, {"a": "2025-02-04 19:45:00", "b": 474.8}, {"a": "2025-02-04 19:50:00", "b": 478.0}, {"a": "2025-02-04 19:55:00", "b": 493.4}, {"a": "2025-02-04 20:00:00", "b": 515.75}, {"a": "2025-02-04 20:05:00", "b": 529.4}, {"a": "2025-02-04 20:10:00", "b": 536.8}, {"a": "2025-02-04 20:15:00", "b": 542.6}, {"a": "2025-02-04 20:20:00", "b": 527.0}, {"a": "2025-02-04 20:25:00", "b": 527.0}, {"a": "2025-02-04 20:30:00", "b": 531.4}, {"a": "2025-02-04 20:35:00", "b": 582.75}, {"a": "2025-02-04 20:40:00", "b": 627.75}, {"a": "2025-02-04 20:45:00", "b": 625.25}, {"a": "2025-02-04 20:50:00", "b": 627.2}, {"a": "2025-02-04 20:55:00", "b": 628.75}, {"a": "2025-02-04 21:00:00", "b": 620.0}, {"a": "2025-02-04 21:05:00", "b": 618.6}, {"a": "2025-02-04 21:10:00", "b": 600.2}, {"a": "2025-02-04 21:15:00", "b": 602.4}, {"a": "2025-02-04 21:20:00", "b": 611.4}, {"a": "2025-02-04 21:25:00", "b": 607.75}, {"a": "2025-02-04 21:30:00", "b": 594.8}, {"a": "2025-02-04 21:35:00", "b": 598.0}, {"a": "2025-02-04 21:40:00", "b": 591.8}, {"a": "2025-02-04 21:45:00", "b": 587.2}, {"a": "2025-02-04 21:50:00", "b": 588.25}, {"a": "2025-02-04 21:55:00", "b": 582.25}, {"a": "2025-02-04 22:00:00", "b": 600.8}, {"a": "2025-02-04 22:05:00", "b": 646.5}, {"a": "2025-02-04 22:10:00", "b": 651.25}, {"a": "2025-02-04 22:15:00", "b": 636.2}, {"a": "2025-02-04 22:20:00", "b": 619.8}, {"a": "2025-02-04 22:25:00", "b": 611.0}, {"a": "2025-02-04 22:30:00", "b": 597.8}, {"a": "2025-02-04 22:35:00", "b": 595.5}, {"a": "2025-02-04 22:40:00", "b": 596.0}, {"a": "2025-02-04 22:45:00", "b": 594.2}, {"a": "2025-02-04 22:50:00", "b": 594.6666666666666}, {"a": "2025-02-04 22:55:00", "b": 594.6666666666666}, {"a": "2025-02-04 23:00:00", "b": 588.5}, {"a": "2025-02-04 23:05:00", "b": 565.0}, {"a": "2025-02-04 23:10:00", "b": 558.4}, {"a": "2025-02-04 23:15:00", "b": 568.8}, {"a": "2025-02-04 23:20:00", "b": 562.4}, {"a": "2025-02-04 23:25:00", "b": 555.6666666666666}, {"a": "2025-02-04 23:30:00", "b": 549.4}, {"a": "2025-02-04 23:35:00", "b": 551.5}, {"a": "2025-02-04 23:40:00", "b": 560.0}, {"a": "2025-02-04 23:45:00", "b": 550.0}, {"a": "2025-02-04 23:50:00", "b": 541.5}, {"a": "2025-02-04 23:55:00", "b": 530.4}],
      },
      mark: "line",
      width: "container",
      encoding: {
        x: { field: "a", type: "ordinal", title: "Last Reported" },
        y: { field: "b", type: "quantitative", title: "CO2 State" },
      },
    };
    vegaEmbed("#vis", yourVlSpec);
    